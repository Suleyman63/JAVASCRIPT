// //*======================DIZILER==================================
// const dogum = 1980;

// const yaslar = [30, 25, 44, 77];

// const isimler = [
//   "ahmet",
//   "mustafa",
//   "can",
//   "bekir",
//   "ayse",
//   20,
//   40,
//   true,
//   23.4,
//   2021 - dogum,
//   yaslar,
// ];

// console.log(isimler);

// console.log(isimler[0]);
// console.log((isimler[3] = "canan"));

// isimler[isimler.length - 2] = false;
// console.log(isimler);

// // isimler dizisini 10. elemanini yazdir

// console.log(isimler[10][10]);

// isimler[11] = "ipek";
// console.log(isimler);

//*============DIZIYI DEGISTIREN METODLAR=====================
// const h1 = document.getElementById("meyveler");
// deneme = "kiraz";

// let meyveler = ["elma", "armut", "muz", "kivi"];

// // ? pop() son elemani siler
// meyveler.pop();

// //? push() dizinin sonuna eleman ekler
// const boyut = meyveler.push("cilek", "karpuz");

// console.log(boyut);
// console.log(meyveler);

// // //? unshift() dizinin basina ekleme yapar
// const boyut1 = meyveler.unshift("ayva");
// console.log(meyveler);

// // //? shift() dizinin ilk elemanini siler
// const silinen = meyveler.shift();
// console.log(silinen);
// console.log(meyveler);

// // //? reverse() dizinin tamamini ters cevirir
// meyveler.reverse();
// console.log(meyveler);

// meyveler.push("kavun", "mango");
// console.log(meyveler);

// meyveler.sort();
// console.log(meyveler);

// // //? silme yapmadan 1. elemandan sonra ekleme yaptik
// meyveler.splice(1, 0, "erik");
// console.log(meyveler);

// const join = meyveler.join(meyveler);

// document.write(meyveler);

// h1.innerHTML = meyveler;

// //*=========DIZI ERISIM METHODLARI=================

// const sayilar = [3, 5, 2, "2", "uc", 2, "bes"];

// // console.log(sayilar.includes("5")); // false

// // console.log(sayilar.includes(5)); // true

// const ikiIndex = sayilar.indexOf(2);
// console.log(ikiIndex);
// console.log(sayilar.lastIndexOf(2));

// const ucIndex = sayilar.indexOf("uc");
// console.log(ucIndex);

// // // join dizinin elemanlarini birlestirip string hale cevirir
// const sayilar1 = sayilar.join(" "); // eleman. aras bosluk koyar
// console.log(sayilar1);

// // // tostring fonksiyonu elemanlarin arasina virgul koyorak birlestirir ve string yapar
// const sayilar2 = sayilar.toString();
// console.log(sayilar2);
// // h1.innerHTML = sayilar2;

// const arabalar = ["bmw", "mercedes", "audi", "ferrari", "anadol"];

// // // slice fonk ile bolduk audi den sonrasini aldik
// const arabalar1 = arabalar.slice(2);
// console.log(arabalar1);

// // // ekleme yaptik
// arabalar1.push("fiat");
// console.log(arabalar1);

// const arabalar2 = arabalar.slice(1, 3); // mercedes ve auidyi aldik
// console.log(arabalar2);

// //*====================CONCAT=======================

// const yazilar = ["sehir", "cinsiyet", "ad", "soyad", "yas"];
// const rakamlar = [3, 5, 6, 8, 1];

// const birlesik = yazilar.concat(rakamlar); // once string sonra rakam yazdirdik
// console.log(birlesik);

// const birlesik1 = rakamlar.concat(yazilar); // once rakam sonra string yazdirdik
// console.log(birlesik1);

// console.log(typeof birlesik[7]); // number
// console.log(typeof birlesik[3]); // string
