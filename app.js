let left = 0;
function sliderLeft() {
  let poloska = document.getElementById('polosa');
  left = left - 128;
  if (left < -896) {
    left = 0;
  }
  poloska.style.left = left +'px';
}