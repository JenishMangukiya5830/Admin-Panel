document.addEventListener('DOMContentLoaded',() => {

    let success = document.querySelector('.success');
    let error = document.querySelector('.error');

    if(success.innerHTML !== '' || error.innerHTML !== '')
    {
        setTimeout(() => {
            success.innerHTML = '';
            error.innerHTML = '';
        },2000)
    }

});