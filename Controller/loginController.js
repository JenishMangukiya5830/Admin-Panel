const register = require('../models/RegisterModel');

const nodemailer = require('nodemailer');

const otp_gen = require('otp-generator');

const alert = require('alert');

// register User

module.exports.insert = async (req,res) => {
    try{
        if(req.body.username != '')
        {
            if(req.body.email != '')
            {
                if(req.body.password != '')
                {
                    if(req.body.password.length >= 6)
                    {
                        register.find({},(err,user) => {
                            if(err)
                            {
                                req.flash('error','Something Went Wrong');
                                return res.redirect('back');
                            }

                            for (let i = 0; i < user.length; i++) {
                                
                                if(user[i].username == req.body.username)
                                {
                                    req.flash('error','Username Already Exist');
                                    return res.redirect('back');
                                }
                                else
                                {
                                    if(user[i].email == req.body.email)
                                    {
                                        req.flash("error",'Email Already Exist');
                                        return res.redirect('back');
                                    }
                                    else
                                    {
                                        console.log(user);
                                    }
                                }
                                
                            }

                        });
                        let insert = await register.create({
                            username : req.body.username,
                            email : req.body.email,
                            password : req.body.password
                        })
    
                        if(insert)
                        {
                            req.flash('success','Register Successfully');
                            return res.redirect('back');
                        }
                        else
                        {
                            req.flash('error','Register Unsuccessfuly');
                            res.redirect('back');
                        }
                    }
                    else
                    {
                        req.flash('error','Enter minimum 6 letter');
                        res.redirect('back');
                    }
                }
                else{
                    req.flash('error','Enter Password');
                    return res.redirect('back');
                }
            }
            else
            {
                req.flash('error','Enter Email Id');
                return res.redirect('back');
            }
        }
        else
        {
            req.flash('error',"Enter Username");
            return res.redirect('back');
        }
    }
    catch(err)
    {
        console.log(err);
    }
}

// Login 

module.exports.login = (req,res) => {
    if(!res.locals.user)
    {
        return res.render('login')
    }
    return res.redirect('/dashboard/index');
}

module.exports.insertData = (req,res) => {
    return res.render('index');
}

// forgot password

module.exports.email = (req,res) => {
    console.log(req.body.email);
    register.findOne({email : req.body.email},(err,userdata) => {
        if(err)
        {
            console.log('Email not Found');
            return false;
        }
        console.log(userdata);

        if(userdata.email)
        {
            let otp = otp_gen.generate(6,{upperCaseAlphabets : false,lowerCaseAlphabets : false,specialChars : false});
             // nodemailer

            var transport = nodemailer.createTransport({
                service : 'gmail',
                auth: {
                    user: "jenishmangukiya5830@gmail.com",
                    pass: "arpnobelkpturnbm"
                }
            });

            var mailOptions = {
                from: 'jenishmangukiya5830@gmail.com',
                to: userdata.email,
                subject: 'Nice Nodemailer test',
                text: 'Hey there, it’s our first message sent with Nodemailer ',
                html: 'otp = ' + otp,
            };
            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent');
            }); 

            
            res.cookie('userdata',{
                email : req.body.email,
                otp : otp
            });

            return res.redirect('/admin/otp');
        }
        else
        {
            alert('Email not Found');
            return res.redirect('back');
        }
    })
}

module.exports.getotp = (req,res) => {
    res.render('otp')
}

module.exports.otpData = (req,res) => {
    if(req.cookies.userdata.otp == req.body.otp)
    {
        return res.redirect('/admin/newpass');
    }
    return alert("OTP Doesnot Match");

}

module.exports.newpass = (req,res) => {
    return res.render("newpass");
}

module.exports.setpass = (req,res) => {
    

    if(req.body.newpass != '')
    {
        if(req.body.newpass.length >= 6)
        {
            if(req.body.conpass != '')
            {
                if(req.body.conpass.length >= 6)
                {
                    if(req.body.newpass == req.body.conpass)
                    {
                        let email = req.cookies.userdata.email;

                        register.findOneAndUpdate({email : email},{password : req.body.newpass},(err,user) => {
                            if(err)
                            {
                                alert('User not Found');
                                return false;
                            }
                            console.log(user);
                            return res.redirect('/admin/login');
                        })
                    }
                    else
                    {
                        alert("Both Password not Match");
                        return res.redirect('back');
                    }
                }
                else
                {
                    alert('Enter Confirm Password minimum 6 letter');
                    return res.redirect("back");
                }
            }
            else
            {
                alert('Enter Confirm Password');
                return res.redirect('back');
            }
        }   
        else
        {
            alert("Enter New Password Minimum 6 Letter");
            return res.redirect('back');
        } 
    }
    else
    {
        alert('Enter New Password');
        return res.redirect('back');
    }
}

// logout 

module.exports.google = (req,res) => {
    console.log(req.user);
    res.render('index',{
        user : req.user 
    })
}
