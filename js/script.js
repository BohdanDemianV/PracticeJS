$(document).ready(function(){
  $('.btn_add').click(function(event) {
    $(".btn_add").toggleClass('active');
  });
  $('.btn_remove').click(function(event) {
    $(".btn_remove").removeClass('active');
  });
  $('.btn_toggle').click(function(event) {
    $(".btn_toggle").toggleClass('active');
  });

});

function myFunction() {
  let x = document.getElementById("get_attr").getAttribute("class");
  document.getElementById("demo").innerHTML = x;
  console.log(x)
  }

function myFunctionSet() {
  document.getElementById("set_attr").setAttribute("class", "btn btn_setAttr");
}

function myFunctionAlertOnClick() {
  alert('Keep it up! I will kow JS!');
}

let myLifeSlyle = "good job"
console.log(myLifeSlyle)

