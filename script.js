var btn = document.getElementById('btn');
var text = document.getElementById('text');
var image = document.getElementById('img');
var cover = 0;

function coverImg() {
  if(cover == 0) {
    btn.innerHTML = "Cover";
    text.style.display = "none";
    image.style.filter = "blur(0)";
    cover = 1;
  } else {
    btn.innerHTML = "Uncover";
    text.style.display = "block";
    image.style.filter = "blur(24px)";
    cover = 0;
  }
}
