//=======================================================//
//                 FONKSIYONLAR                          //
//=======================================================//

//==== 1.FUNCTION DECLARATION YONTEMI ===//
// function yazdir() {
//   console.log("ahmet");
// }
// yazdir();

// function yazdirAd(ad, yas) {
//   console.log(ad, yas);
// }
// yazdirAd("mustafa", 34);
// yazdirAd("kemal", 44);

// function hesapla(dogum) {
//   return 2021 - dogum;
// }
// console.log(hesapla(1999));

// alert("yasinizi :"(hesapla(1999)));
// const yas = hesapla(1996);
// console.log(yas);

// const sayi = prompt("bir sayi giriniz");

// function tekCift(sayi) {
//   return (sonuc = sayi % 2 == 0 ? "Cift" : "Tek");
// }
// console.log(tekCift(sayi));

//==== 2.FUNCTION EXPRESSION YONTEMI ===//

// const tekMi = function (sayi) {
//   return sayi % 2 ? "Tek" : "Cift";
// };

// console.log(tekMi(8));
// console.log(tekMi(5));

// let buyukBul = function (x, y, z) {
//   let enBuyuk;
//   if (x > y && x > z) {
//     enBuyuk = x;
//   } else if (y > x && y > z) {
//     enBuyuk = y;
//   } else if (z > x && z > y) {
//     enBuyuk = z;
//   }
//   return enBuyuk;
// };

// console.log(buyukBul(3, 5, 9));

//==== 3. ARROW FUNCTION YONTEMI ===//
// const topla = (a, b) => a + b;
// console.log(topla(5, 7));
// console.log(topla(9, 2));

// const ciftMi = (sayi) => (sayi % 2 ? "TEK" : "CIFT");

// console.log(ciftMi(6));
// console.log(ciftMi(5));

// const taban = prompt("taban gir");
// const us = prompt("us gir");

// const usAl = (t, u) => t ** u;
// console.log(usAl(taban, us));

// const menu = () => {
//   console.log("===========================");
//   console.log("JAVASCRIPT DERSLERI");
//   console.log("===========================");
// };
// menu();

// const bilgi = (ad, soyad, dogum) => {
//   const kisi = `${ad}, ${soyad}, ${dogum}`;
//   return kisi;
// };

// console.log(bilgi("mehmet", "cakmak", 1990));

// const kisi = (ad, soyad, yas) => `${ad}, ${soyad}, ${yas}}`;
// console.log(kisi("ali", "ok", 24));

//====silindir hacmi========//
// const r = prompt("yaricap giriniz");
// const h = prompt("yukseklik giriniz");

// const hacim = (r, h) => Math.PI * r * r * h;
// console.log("hacim :" + Math.round(hacim(r, h)));
// console.log("hacim :" + hacim(r, h).toFixed(2));
