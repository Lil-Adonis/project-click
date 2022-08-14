var p = document.getElementById("p");
var r = document.getElementById("r");
var o = document.getElementById("o");
var j = document.getElementById("j");
var e = document.getElementById("e");
var c = document.getElementById("c");
var t = document.getElementById("t");
var num = document.getElementById("num");
var project = document.getElementById("complete");

p.addEventListener("click", () => {
  p.style.display = "none";
  r.style.display = "block";
});
r.addEventListener("click", () => {
  r.style.display = "none";
  o.style.display = "block";
});
o.addEventListener("click", () => {
  o.style.display = "none";
  j.style.display = "block";
});
j.addEventListener("click", () => {
  j.style.display = "none";
  e.style.display = "block";
});
e.addEventListener("click", () => {
  e.style.display = "none";
  c.style.display = "block";
});
c.addEventListener("click", () => {
  c.style.display = "none";
  t.style.display = "block";
});
t.addEventListener("click", () => {
  t.style.display = "none";
  num.style.display = "block";
});
num.addEventListener("click", () => {
  num.style.display = "none";
  project.style.display = "block";
});
jupyter.addEventListener("click", () => {
  project.style.display = "none";
  p.style.display = "block";
});
