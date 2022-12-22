const profilemodel = require('../models/ProfileModel');

const CategoryModel = require('../models/CategoryModel');

const SubCategoryModel = require('../models/SubCategoryModel');


const alert = require('alert');


module.exports.get = (req,res) => {
    return res.render('index')
}

module.exports.without = (req,res) => {
    return res.render('without-menu')
}

module.exports.navbar = (req,res) => {
    return res.render('without-navbar');
}

module.exports.container = (req,res) => {
    return res.render('container');
}

module.exports.fluid = (req,res) => {
    return res.render('fluid');
}

module.exports.blank = (req,res) => {
    return res.render('blank');
}

module.exports.connections = (req,res) => {
    return res.render('connections');
}

module.exports.notification = (req,res) => {
    return res.render('notification');
}

module.exports.account = (req,res) => {

    let id = req.cookies.userLogin._id;

    console.log(id);


    profilemodel.findOne({userid : id},(err,data) => {
        if(err)
        {
            console.log('sfgrthf');
            return res.redirect('back');
        }

        console.log(data);
       if(data)
        {
            return res.render('account',{
                data : data
            });
        }
        else
        {
            return res.render('account2');
        }

        // profilemodel.create({
        //     userid : id,
        //     fname : fname,
        //     lname : lname,
        //     email : email,
        //     username : username,
        //     address : address,
        //     state : state,
        //     phone : phone,
        //     zipcode : zipcode
        // },(err,userprofile) => {
        //     if(err)
        //     {
        //         console.log('data not Inserted');
        //         return res.redirect('back');
        //     }
        //     console.log(userprofile);
        //     res.render('account',{
        //         data : userprofile
        //     })
        //     return res.redirect('back');
        // });

    });



}

module.exports.login = (req,res) => {
    return res.render('login');
}

module.exports.register = (req,res) => {
    return res.render('register')
}

module.exports.forgotPassword = (req,res) => {
    return res.render('forgotPassword')
}

module.exports.error = (req,res) => {
    return res.render('error')
}

module.exports.maintenance = (req,res) => {
    return res.render('maintenence')
}

module.exports.cards = (req,res) => {
    return res.render('cards')
}

module.exports.accordion = (req,res) => {
    return res.render('accordion')
}

module.exports.alerts = (req,res) => {
    return res.render('alerts')
}

module.exports.badges = (req,res) => {
    return res.render('badges')
}

module.exports.buttons = (req,res) => {
    return res.render('buttons')
}

module.exports.carousel = (req,res) => {
    return res.render('carousel')
}

module.exports.collapse = (req,res) => {
    return res.render('collapse')
}

module.exports.dropdowns = (req,res) => {
    return res.render('dropdowns')
}

module.exports.footer = (req,res) => {
    return res.render('footer1')
}

module.exports.list_groups = (req,res) => {
    return res.render('list-groups')
}

module.exports.modals = (req,res) => {
    return res.render('modals')
}

module.exports.navbar2 = (req,res) => {
    return res.render('navbar')
}

module.exports.offcanvas = (req,res) => {
    return res.render('offcanvas')
}

module.exports.pagination_breadcrumbs = (req,res) => {
    return res.render('breadcrumbs')
}

module.exports.progress = (req,res) => {
    return res.render('progress')
}

module.exports.spinners = (req,res) => {
    return res.render('spinners')
}

module.exports.tabs_pills = (req,res) => {
    return res.render('tabs-pills')
}

module.exports.toasts = (req,res) => {
    return res.render('toasts')
}

module.exports.tooltips_popovers = (req,res) => {
    return res.render('tooltips-popovers')
}

module.exports.typography = (req,res) => {
    return res.render('typography')
}

module.exports.scrollbar = (req,res) => {
    return res.render('scrollbar')
}

module.exports.divider = (req,res) => {
    return res.render('divider')
}

module.exports.boxicon = (req,res) => {
    return res.render('Boxicons')
}

module.exports.basic_input = (req,res) => {
    return res.render('basic_input')
}

module.exports.input_group = (req,res) => {
    return res.render('input_group')
}

module.exports.vertical = (req,res) => {
    return res.render('vertical-form')
}

module.exports.horizontal = (req,res) => {
    return res.render('horizontal-form')
}

module.exports.table = (req,res) => {
    return res.render('table')
}

module.exports.category = (req,res) => {
    return res.render('category');
}

module.exports.subcategory = (req,res) => {

    CategoryModel.find({},(err,data) => {
        if(err)
        {
            console.log('Data not Found');
            return false;
        }

        console.log('Data found');
        return res.render('subcategory',{
            category : data
        });

    });
}

module.exports.logout = (req,res) => {
    res.clearCookie('userLogin');
    req.logout(() => {
        res.redirect('/admin/auth-login-basic')
    });
}

// upload Data in profile Model

module.exports.profile = (req,res) => {

    let id = req.body.id
    let fname = req.body.Firstname;
    let lname = req.body.lastName;
    let email = req.body.email;
    let username = req.body.username;
    let phone = req.body.phoneNumber;
    let address = req.body.address;
    let state = req.body.state;
    let zipcode = req.body.zipCode;


    profilemodel.findOne({userid : id},(err,data) => {
        if(err)
        {
            console.log('sfgrthf');
            return res.redirect('back');
        }

        console.log(data);

        if(data)
        {
            profilemodel.findOneAndUpdate({userid : id},{
                userid : id,
               fname : fname,
               lname : lname,
               email : email,
               username : username,
               address : address,
               state : state,
               phone : phone,
               zipcode : zipcode
            },(err,userupdate) => {
                if(err)
                {
                    console.log('data not Updated');
                    return res.redirect('back');
                }

                console.log(userupdate);
                return res.redirect('back');

            })
        }
        else
        {
            if(fname != '')
            {
                if(lname != '')
                {
                    if(email != '')
                    {
                        
                        if(username != '')
                        {
                            
                            if(phone != '')
                            {
                                if(phone.length >= 10 && phone.length <=10)
                                {
                                    if(address != '')
                                    {
                                        if(state != '')
                                        {
                                            if(zipcode != '')
                                            {
                                                if(zipcode.length >= 6 && zipcode.length <= 6)
                                                {
                                                    profilemodel.create({
                                                        userid : id,
                                                        fname : fname,
                                                        lname : lname,
                                                        email : email,
                                                        username : username,
                                                        address : address,
                                                        state : state,
                                                        phone : phone,
                                                        zipcode : zipcode
                                                    },(err,userprofile) => {
                                                        if(err)
                                                        {
                                                            console.log('data not Inserted');
                                                            return res.redirect('back');
                                                        }
                                                        console.log(userprofile);
                                                        return res.render('account',{
                                                            data : userprofile
                                                        })
                                                    });
                                                }
                                                else
                                                {
                                                    req.flash('error','Enter Valid Zipcode');
                                                    res.redirect('back');
                                                }
                                            }
                                            else
                                            {
                                                req.flash('error','Enter Your Zipcode');
                                                res.redirect('back');
                                            }
                                        }
                                        else
                                        {
                                            req.flash('error','Enter Your State');
                                            res.redirect('back');
                                        }
                                    }
                                    else
                                    {
                                        req.flash('error','Enter Your Address');
                                        res.redirect('back');
                                    }
                                }
                                else
                                {
                                    req.flash('error','Enter Your 10 degit Mobile No.');
                                    res.redirect('back');
                                }
                            }
                            else
                            {
                                req.flash('error','Enter Your Phone No.');
                                res.redirect('back');
                            }
                            
                        }
                        else
                        {
                            req.flash('error','Enter Your Username');
                            res.redirect('back');
                        }
                        
                    }
                    else
                    {
                        req.flash('error','Enter Your Email Id');
                        res.redirect('back');
                    }
                }
                else
                {
                    req.flash('error','Enter Your Last Name');
                    res.redirect('back');
                }
            }
            else
            {   
                req.flash('error','Enter Your First Name');
                res.redirect('back');
            }
        }
    });
}

// insert category

module.exports.categoryinsert = (req,res) => {

    let category = req.body.category;

    console.log(category);

    CategoryModel.create({
        category : category
    },(err,data) => {
        if(err)
        {
            console.log('Category not Inserted');
            return false;
        }
        console.log('category Inserted');
        return res.redirect('back');

    });
}

// View category

module.exports.viewCategory = (req,res) => {
    CategoryModel.find({},(err,data) => {
        if(err)
        {
            console.log('Data not found');
            return false;
        }

        console.log('Data found');
        return res.render('viewCategory',{
            data : data
        });
    });
}

// Delet category

module.exports.DeletCategory = (req,res) => {
    CategoryModel.findByIdAndDelete(req.params.id,(err,data) => {
        if(err)
        {
            console.log('Data not found');
            return false;
        }

        return res.redirect('back');

    })
}

// insert Subcategory

module.exports.subcategorypage = (req,res) => {

    let subcategory = req.body.subcategory
    let category = req.body.category

    console.log(subcategory);
    console.log(category);

    SubCategoryModel.create({
        subcategory : subcategory,
        category : category
    },(err,data) => {
        if(err)
        {
            console.log('data not Inserted');
            return false;
        }

        console.log('data Inserted');
        return res.redirect('/dashboard/viewSubcategory');

    })
}

// View SubCategory

module.exports.viewSubcategory = (req,res) => {

    SubCategoryModel.find()
        .populate('category')
        .then(data => {
            return res.render('viewSubcategory',{
                data : data
            })
        })

}

// Delet Subcategory

module.exports.DeletSubCategory = (req,res) => {

    SubCategoryModel.findByIdAndDelete(req.params.id,(err,data) => {
        if(err)
        {
            console.log('Record not Delete');
            return res.redirect('back');
        }

        console.log('Record Delete');
        return res.redirect('back');

    })

}