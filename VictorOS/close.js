function Closetestwindow() {
  var x = document.getElementById("window");
  if (x.style.display === "none") {
    document.getElementById("minimizedfiles").style.display = "none";
    x.style.display = "block";
    var files = document.getElementById("file"); files.src = ("medias/fortinaiti ila babaji.mp4");
  } else {
    x.style.display = "none";
    var files = document.getElementById("file"); files.src = ("");
  }
}
function Closetestwindow2() {
  var x = document.getElementById("window2");
  if (x.style.display === "none") {
    document.getElementById("minimizedmeme").style.display = "none";
    x.style.display = "block";
    var mememaker = document.getElementById("mememaker"); mememaker.src = ("game1.html");
  } else {
    x.style.display = "none";
    var mememaker = document.getElementById("mememaker"); mememaker.src = ("");
  }
}
function Closetestwindow3() {
  var x = document.getElementById("window3");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizednotes").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function Closetestwindow4() {
  var x = document.getElementById("window4");
  if (x.style.display === "none") {
    x.style.display = "block";
    var medias = document.getElementById("media"); media.src = ("MEDIA.html");
    document.getElementById("minimizedmedia").style.display = "none";
  } else {
    x.style.display = "none";
    var medias = document.getElementById("media"); media.src = ("");
  }
}
function Closetestwindow5() {
  var x = document.getElementById("window5");
  if (x.style.display === "none") {
    x.style.display = "block";
    var store = document.getElementById("store"); store.src = ("store.html");
    document.getElementById("minimizedstore").style.display = "none";
  } else {
    x.style.display = "none";
    var store = document.getElementById("store"); store.src = ("");
  }
}
function Closetestwindow6() {
  var x = document.getElementById("window6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function opensidebar() {
  var x = document.getElementById("Sidebar");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}