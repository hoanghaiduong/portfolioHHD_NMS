var submit=document.getElementById('login');
submit.addEventListener('click',
function(event)
{
	event.preventDefault();
	

}
);
//colapse văn bản
function functioncollapse() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }
//button tat den
function functionlight() {
var x=document.getElementById('tatden');
var body=document.getElementById('body');
var gthieu=document.getElementById('noidungmain');
var GT=document.getElementById('gioithieucacloai');
var menu=document.getElementById('menu-left');
var Mau=document.querySelectorAll("#menu-left");
var thep=document.querySelectorAll('#duoc');
var thepmat=document.querySelectorAll('#mat');
var tittleh6=document.querySelectorAll("#dmm");
var i;
var j;

	if(body.style.backgroundColor==='black'){
		body.style.backgroundColor='white';
		body.style.color='black';
		gthieu.style.color='black';
		GT.style.boxShadow="1px 2px 8px 2px black";
		menu.style.color='black';
		for(i=0;i<tittleh6.length;i++)
		{
				var tth=tittleh6[i].querySelectorAll('h6');
				for(j=0;j<tth.length;j++)
				{
					tth[j].style.color='black';
				}
		}
		for(i=0;i<thep.length;i++)
		{
				var P=thep[i].querySelectorAll('p');
				for(j=0;j<P.length;j++)
				{
					P[j].style.color='black';
				}
		}
		for(i=0;i<thepmat.length;i++)
		{
				var THP=thepmat[i].querySelectorAll('p');
				for(j=0;j<THP.length;j++)
				{
					THP[j].style.color='black';
				}
		}
		for(i=0;i<Mau.length;i++)
{
		var Clor=Mau[i].querySelectorAll('a');
		for(j=0;j<Clor.length;j++)
		{
			Clor[j].style.color='black';
		}
}
	}
	else{body.style.backgroundColor='black';
	prompt('Bạn Tên Gì???');
	prompt('Bạn Đã Đủ 18 tuổi chưa???');
	var kiemtra=confirm("Bạn có muốn xác nhận hệ thống kiểm tra tuổi của bạn???");

			var nhaptuoi=0;
			nhaptuoi=prompt('Nhập tuổi bạn đi !!!')
			if(nhaptuoi < 18 || nhaptuoi === "")
			{
				do
				{
					var tren18=0;
					tren18=prompt('Yêu cầu phải trên 18 tuổi');
				}
				while(tren18 < 18 || tren18 == "");
			}
			
			else
			{
				alert('Chúc mừng bạn đã đủ tuổi ');
			}
			//alert('Chúc mừng bạn đã đủ tuổi ');
	alert('Xin Chào Các Bạn Đến Với Chế Độ Tối Của Website =)) ');
	body.style.color='white';
	menu.style.color='red';
	gthieu.style.color='white';
	GT.style.boxShadow="1px 1px 10px 2px white";

	for(i=0;i<thep.length;i++)
	{
			var P=thep[i].querySelectorAll('p');
			for(j=0;j<P.length;j++)
			{
				P[j].style.color='red';
			}
	}
	for(i=0;i<thepmat.length;i++)
	{
			var THP=thepmat[i].querySelectorAll('p');
			for(j=0;j<THP.length;j++)
			{
				THP[j].style.color='red';
			}
	}
	for(i=0;i<tittleh6.length;i++)
		{
				var tth=tittleh6[i].querySelectorAll('h6');
				for(j=0;j<tth.length;j++)
				{
					tth[j].style.color='blue';
				}
		}
	for(i=0;i<Mau.length;i++)
{
		var Clor=Mau[i].querySelectorAll('a');
		for(j=0;j<Clor.length;j++)
		{
			Clor[j].style.color='white';
		}
}
}

}




jQuery(document).ready(function($){ 	
	if($(".btn-top").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".btn-top").show()
			} else {
				$(".btn-top").hide()
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}		
});
function function1()
{
	let x=document.getElementById("menuleft");
	let y=document.getElementById('menu-left');
	let z=document.getElementsByClassName('theli');
	
}
function chargebattery() {
	var a;
	a = document.getElementById("div1");
	a.innerHTML = "&#xf244;";
	setTimeout(function () {
		a.innerHTML = "&#xf243;";
	  }, 1000);
	setTimeout(function () {
		a.innerHTML = "&#xf242;";
	  }, 2000);
	setTimeout(function () {
		a.innerHTML = "&#xf241;";
	  }, 3000);
	setTimeout(function () {
		a.innerHTML = "&#xf240;";
	  }, 4000);
  }
  chargebattery();
  setInterval(chargebattery, 5000);
  // This is just to auto-update the data-text if you're editing it directly on the page and is not required for the actual effect
$('[data-text]').on('keyup', function(){
	$(this).attr('data-text', $(this).text());
  });

