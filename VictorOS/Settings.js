//background
function bg1() {
   document.getElementById("body").style.backgroundImage = "url(bg.jpg)";
}
function custom_bg(event) {
  var reader = new FileReader();
  reader.onload = function() {
    document.getElementById("body").style.backgroundImage = `url(${reader.result})`;
    document.getElementById("body").style.backgroundSize = 'cover';
  }
  reader.readAsDataURL(event.target.files[0]);
}

//Color scheme

function color1() {
  document.getElementById("header").style.backgroundColor = "#D3D3D399";
}
function getcolor() {
  a = document.getElementById("color").value;
  document.getElementById("header").style.backgroundColor = a + "99";
}
function cssimport() {
  b = document.getElementById("cssimport").value;
  document.getElementById("style").href = b;
}

blank = "<div style='height: 100%; width: 100%; background: black; color: white; text-align: center; font-size: 25px; padding: 5px; font-family: arial;'>It Is Now Safe To Close This Tab</div>";

function run() {
  app = prompt('Run An Application');
  eval(app);
}