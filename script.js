var text = document.querySelector(".text")
var isi = "HELLO, MY NAME IS CAKRA SATRIA PUTRA!"
var isi2 = "I AM A WEB DEVELOPER"
var next =false
var i = 0
var a = 0
var b = 0

setInterval(function(){
  if(next){
    typing(isi2,false)
    console.log(next)
  }
  else{
    typing(isi, true)
  }
}, 150)

function typing(value, kondisi){
  if(i< value.length){
    text.innerHTML += value.charAt(i)
    i++
  }
  else if(i == value.length){
    var hapus = value.substring(0 , value.length- a)
    text.innerHTML = hapus
    b++ 
    if(b > 10){
      a++
    }
    if(a == value.length + 1){
      i += 1
    }
  }
  else if(a == value.length +1){
    i = 0
    a= 0
    b=0
    next = kondisi
  }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  