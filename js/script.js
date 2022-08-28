// navbar-start
const nav = document.getElementById("nav_position")
window.addEventListener("scroll",function(){
  const value = window. scrollY
 if(value > 100){
    nav.classList.add("sticky")
 }
 else{
    nav.classList.remove("sticky")
 }

})

// bars start
// 
// bars end
// venobox-start
new VenoBox({
    selector: '.venobox'
  });
// venobox-end
// navbar-end
// navbar-start
// navbar-end
// navbar-start
// navbar-end