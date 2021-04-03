function myfunction() {
    var submit = document.getElementById('submit');
    var username = document.getElementById('username');
    var psw1 = document.getElementById('psw1');
    var psw2 = document.getElementById('psw2');
    var error0 = document.getElementById('error0');
    var error4 = document.getElementById('error4');
    var error5 = document.getElementById('error5');
    var sc1 = document.getElementById('successfully1');
    var sc2 = document.getElementById('successfully2');
    var sucess1 = document.getElementById('success1');
    var sucess2 = document.getElementById('success2');
    var error1 = false;
    var error3 = false;
    var error2 = false;
    var error6 = false;

    if (username.value === "" || username.value.length < 5 || username.value.length > 30) {
        error6 = true;
        error5.style.display = 'block';
        username.style.borderBottom = '1px solid red';
    }
    else {
        error6 = false;
        error5.style.display = 'none';
        username.style.borderBottom = '1px solid green';
    }
    if (psw1.value === "" || psw1.value.length < 8 || psw1.value.length > 30) {
        error1 = true;
        error4.style.display = 'block';
        psw1.style.borderBottom = '1px solid red';

    }
    else {
        psw1.style.borderBottom = '1px solid green';
        error1 = false;
        error4.style.display = 'none';
    }
    if (psw2.value === '') {
        error2 = true;
        psw2.style.borderBottom = '1px solid red';
    }
    else {

        psw2.style.borderBottom = '1px solid green';
        error2 = false;
    }
    if (psw1.value != psw2.value) {
        error3 = true;
        error0.style.display = 'block';
        psw2.style.borderBottom = '1px solid red';
    }
    else {
        error3 = false;

        if (psw1.value === '' && psw2.value === '') {
            setTimeout(() => {
                psw2.style.borderBottom = '1px solid red';
            }, 1000);
        }
        else {

            error0.style.display = 'none';
        }

    }
    if (error1 === false && error2 === false && error6 == false && error3===false) 
    {
      
        var setgiatri = username.value;
       setTimeout(() => {
           alert('Xin chào'+ " " + setgiatri);
       }, 1000);
       alert('Chúc mừng bạn đã đăng kí thành công!!!')
       location.href="/Font-End/BT JS2/INDEX.html";
    }

}
