//background
function bg1() {
   document.getElementById("body").style.backgroundImage = "url(bg.jpg)";
}
function bg2() {
   document.getElementById("body").style.backgroundImage = "url(citywater.png)";
}
function bg3() {
   document.getElementById("body").style.backgroundImage = "url(Flowers.png)";
}
function bg4() {
   document.getElementById("body").style.backgroundImage = "url(Boardwalk.png)";
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
  document.getElementById("window1e").style.backgroundColor = "#909090";
  document.getElementById("window2e").style.backgroundColor = "#909090";
  document.getElementById("window3e").style.backgroundColor = "#909090";
  document.getElementById("window4e").style.backgroundColor = "#909090";
  document.getElementById("window5e").style.backgroundColor = "#909090";
  document.getElementById("window6e").style.backgroundColor = "#909090";
  document.getElementById("Sidebar").style.backgroundColor = "#90909099";
  document.getElementById("taskbarmenu").style.backgroundColor = "#90909099";
  document.getElementById("setsidebar").style.backgroundColor = "#90909099";
  document.getElementById("menu").style.backgroundColor = "#90909099";
  document.getElementById("contextMenu").style.backgroundColor = "#90909099";
}
function getcolor() {
  a = document.getElementById("color").value;
  console.log(a);
  document.getElementById("window1e").style.backgroundColor = a;
  document.getElementById("window2e").style.backgroundColor = a;
  document.getElementById("window3e").style.backgroundColor = a;
  document.getElementById("window4e").style.backgroundColor = a;
  document.getElementById("window5e").style.backgroundColor = a;
  document.getElementById("window6e").style.backgroundColor = a;
  document.getElementById("Sidebar").style.backgroundColor = a + "99";
  document.getElementById("taskbarmenu").style.backgroundColor = a + "99";
  document.getElementById("setsidebar").style.backgroundColor = a + "99";
  document.getElementById("menu").style.backgroundColor = a + "99";
  document.getElementById("contextMenu").style.backgroundColor = a + "99";
}
function cssimport() {
  b = document.getElementById("cssimport").value;
  document.getElementById("style").href = b;
}