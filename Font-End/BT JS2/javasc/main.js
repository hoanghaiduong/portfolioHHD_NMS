
var submit = document.getElementById('submit');
console.log('submit');
submit.addEventListener('click',
    function (event) {

        event.preventDefault();
        var sc1 = document.getElementById('successfully1');
        var sc2 = document.getElementById('successfully2');
        var sucess1 = document.getElementById('success1');
        var sucess2 = document.getElementById('success2');
        var name = document.getElementById('username');

        var pass = document.getElementById('psw');
        var loi = document.getElementById('error');
        var loi1 = document.getElementById('error1');
        var loi2 = false;
        var loi3 = false;
        name.classList.add('asa');
        if (name.value === "") {
            loi2 = true;
            name.style.borderBottom = "1px solid red";
            loi.style.display = "block";
            name.style.padding = "10px 20px";
            loi.style.color = "white";
            loi.style.fontSize = "15px";
        }
        else {
            loi2 = false;
            name.style.borderBottom = "1px solid green";
            loi.style.display = "none";
            sc1.style.display = "block";
            //xu li loading
            var elem = document.getElementById("myBar");
            var width = 0;
            var id = setInterval(frame, 20);
            function frame() {
                if (width === 100) {
                    clearInterval(id);
                    setTimeout(() => {
                        sucess1.style.display = "block";
                        sc1.style.display = "none";
                    }, 3000);
                    setTimeout(() => {
                        sucess1.style.display = "none";
                    }, 5000);
                } else {
                    width++;
                    elem.innerHTML = width + "%";
                    elem.style.width = width + '%';
                }
            }


        }
        if (pass.value == "") {
            loi3 = true;
            pass.style.borderBottom = "1px solid red";
            loi1.style.display = "block";
            pass.style.padding = "10px 20px";
            loi1.style.color = "white";
            loi1.style.fontSize = "15px";
            sc2.style.display = "none";
        }
        else {
            loi3 = false;
            pass.style.borderBottom = "1px solid green";
            loi1.style.display = "none";
            sc2.style.display = "block";
            var elem1 = document.getElementById("myBar1");
            var width = 0;
            var id = setInterval(frame, 30);
            function frame() {
                if (width === 100) {
                    clearInterval(id);
                    setTimeout(() => {
                        sucess2.style.display = "block";
                        sc2.style.display = "none";
                    }, 3000);
                    setTimeout(() => {
                        sucess2.style.display = "none";
                    }, 5000);
                }
                else {
                    width++;
                    elem1.innerHTML = width + "%";
                    elem1.style.width = width + "%";
                }
            }
        }
        if (loi2 === false && loi3 === false) {

            loi.style.display = "none";
            loi1.style.display = "none";
            sc2.style.display = "none";
            sc1.style.display = "none";
            sucess1.style.display = "none";
            sucess2.style.display = "none";
            var setgiatri = name.value;
            setTimeout(() => {
                alert('Xin chào' + " " + setgiatri);
            }, 1000);
            alert('Chúc mừng bạn đã đăng nhập thành công');
            location.href = '../INDEX.html';
        }
    }
);
