//==========================================//
//                EVENTS                   //
//========================================//
// const h1 = document.getElementById("h1");
// document.onmouseover = function () {
//   h1.style.color = "red";
// };

// document.getElementById("h1").onmouseout = function () {
//   const h1 = document.querySelector(".h1");
//   h1.style.color = "blue";
// };

// const btn = document.getElementById("btn");
// btn.style.backgroundColor = "red";
// btn.style.width = "100px";
// btn.style.padding = "10px";

// document.getElementById("btn").onmouseover = function () {
//   const btn = document.getElementById("btn");
//   btn.style.backgroundColor = "red";
//   btn.style.width = "100px";
//   btn.style.padding = "10px";
// };

// document.getElementById("btn").onmouseout = function () {
//   const btn = document.getElementById("btn");
//   btn.style.backgroundColor = "green";
//   btn.style.width = "100px";
//   btn.style.padding = "10px";
// };

// document.getElementById("btn").addEventListener("mouseover", function () {
//   const btn = document.getElementById("btn");
//   btn.style.width = "100px";
//   btn.style.padding = "10px";
//   btn.style.backgroundColor = "blue";
// });

document.getElementById("btn-ac").onclick = function () {
  document.getElementById("resim").src = "./img/lamba_on.gif";
};

document.getElementById("btn-kapa").onclick = function () {
  document.getElementById("resim").src = "./img/lamba_off.gif";
};
