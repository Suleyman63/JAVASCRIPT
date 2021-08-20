//========================================================//
//                    MAP METHODU
//=======================================================//

// tl = [120, 340, 550, 600, 890];

// const dolarKur = document.getElementById("dolar");
// const euroKur = document.getElementById("euro");
// const dolar = document.getElementById("d-fiyat");
// const euro = document.getElementById("e-fiyat");

// dolarKur.onchange = function () {
//   const dolarFiyat = tl.map((x) => Math.round(x / dolarKur.value));
//   dolar.innerHTML = dolarFiyat;
// };

// euroKur.onchange = function () {
//   const euroFiyat = tl.map((x) => Math.round(x / euroKur.value));

//   euro.innerHTML = euroFiyat;
// };

// ==== zamli fiyatlar  ==== //
// yeniTl = [190, 120, 340, 550, 600, 890];
// const zamliFiy = yeniTl.map((x, y) => {
//   if (x < 250) {
//     return `${y + 1}.urunun zamli fiyati :  ${x * 1.1}<br>`;
//   } else {
//     return `${y + 1}.urunun zamli fiyati :  ${x * 1.2}<br>`;
//   }
// });
// const guncel = yeniTl.join("");
// console.log(guncel);
// document.getElementById("zamli").innerHTML = guncel;

//===============================================================//
//                         FILTER METHODU
//===============================================================//
//===== fiyati 250 den kucuk olanlari ayri bir dizi de saklayiniz ===//
// Tl = [190, 120, 340, 550, 600, 160];
// // const kucuk = Tl.filter((x) => x < 250).forEach((z) => console.log(z));

// // kucukten buyuge siralama
// console.log(Tl.sort((x, y) => x - y));

// // buykten kucuge siralama
// console.log(Tl.sort((x, y) => y - x));

//===========================================================//
//                        PIPELINE
//===========================================================//

// const maaslar = [3000, 3500, 5000, 4000, 6000, 8000];

// const guncel = maaslar.filter((x) => x <= 5000).map((x) => x * 1.2);
// console.log(guncel);

// maaslar
//   .filter((x) => x > 4000)
//   .map((x) => x * 1.1)
//   .forEach((x) => console.log(x));

// const isimler = [
//   "ali",
//   "veli",
//   "ebru",
//   "kenan",
//   "lale",
//   "Ahmet",
//   "Hasan",
//   "Serdar",
//   "Hakki",
// ];
// const isimBul = function (harf) {
//   buyukHarf = harf.toUpperCase();
//   const dizi = isimler.filter((x) => x.startsWith(buyukHarf));
//   console.log(dizi);
// };
// isimBul("a");
// isimBul("A");
// isimBul("S");
// isimBul("s");

//===============================================================//
//                         REDUCE METHODU
//===============================================================//

// const sayilar = [10, 20, 30, 40];

// const toplam = sayilar.reduce(function (x, y) {
//   return x + y;
// });
// console.log(toplam);

// const sayilar2 = [3, 5, 6, 8];
// const carpim = sayilar2.reduce(function (x, y) {
//   return x * y;
// });

// console.log(carpim);

// const maaslar = [2000, 3000, 7000, 5000, 8000];

// const topMass = maaslar.reduce((x, y, i) => {
//   console.log(` ${i} iterasyon : ${x} `);
//   return x + y;
// });
// console.log(topMaas);

// const maaslar1 = [2000, 3000, 7000, 5000, 8000];

// const buyukDortBin = maaslar1
//   .filter((x) => x >= 4000)
//   .reduce((x, y) => x + y, 0);
// console.log(buyukDortBin);

// const maaslar2 = [2000, 3000, 7000, 5000, 8000];

// const ortMaas = maaslar2.reduce((x, y) => x + y, 0) / maaslar2.length;
// console.log(ortMaas);

// const yeniMaas = maaslar2.filter((x) => x >= ortMaas).map((x) => x * 1.1);
// console.log(yeniMaas);

// const yeniMaas2 = maaslar2.filter((x) => x < ortMaas).map((x) => x * 1.2);
// console.log(yeniMaas2);
