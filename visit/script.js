window.onload= function() {
var btn = document.getElementById("home");
btn.addEventListener("click",harp);

function harp(){
   var drop = document.getElementById("drop");
  var room = drop.innerHTML;
if(room ==""){
  drop.innerHTML="mango";
}
}
}