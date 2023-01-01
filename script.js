
window.onload=function(){
    const scrollContainer = document.querySelector(".list_character");
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}




// เพิ่ม

// เพื่อนที่แอดมา
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
// ถ้าไม่มี เพื่อน ให้ปิด answerFriend ="none"
function showDivs(n) {
    

  var i;
  var x = document.getElementsByClassName("list_character");


  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "grid";  
}





