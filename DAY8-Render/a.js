document.getElementById("btn").onclick = function () {
  const renkler = [
    "Red",
    "Blue",
    "Pink",
    "Purple",
    "Green",
    "Yellow",
    "Brown",
    "Black",
    "Aqua",
    "Crimson",
    "Coral",
  ];
  const rastgele = Math.floor(Math.random() * renkler.length);
  document.getElementById("renk").innerHTML = renkler[rastgele];
  document.getElementById("container").style.backgroundColor =
    renkler[rastgele];
};
