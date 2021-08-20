// //================================================================
// //             DESTRUCTURING (OBJECT)
// //================================================================

// const birey = {
//   ad: "can",
//   konum: "samsun",
//   email: "can@gmail.com",
// };

// //klasik yontem
// const ad1 = birey.ad;
// const konum1 = birey.konum;
// const email1 = birey.email;
// console.log(ad1, konum1, email1);

// // yeni yontem destructing
// let { ad, konum, email } = birey;
// console.log(ad, konum, email);

// ad = "mustafa";
// console.log(birey);

// function bilgiAl() {
//   return {
//     id: "101",
//     urunAdi: "apple",
//     fiyat: 15000,
//   };
// }
// console.log(bilgiAl());
// const { id, urunAdi, fiyat } = bilgiAl();

// console.log(id, urunAdi, fiyat);

// //================================================================
// //             DESTRUCTURING (Array)
// //================================================================
// const isimler = ["ahmet", "veli", "can", "kenan"];

// //klasik yontem
// const isim1 = isimler[0];
// const isim2 = isimler[2];
// console.log(isim1, isim2);

// // destructing yontemi
// const [kisi1, kisi3] = isimler;
// console.log(kisi1, kisi3);

// ======================================================
//        YENİ NESİL OPERATORLER: SPREAD VEYA REST  ...
// ======================================================

// Spread operatoru dizileri ve nesneleri birleştirmek
// veya ayırımak icin kullanilabilir.
// Kullanmak içini dizinin onune ... karakterleri konulur.

// const arabalar = ["bmw", "renault", "ferrari", "audi"];

// // DİZİLERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
// // REST (Dizilede kullanım)
// const [araba1, araba2, ...geriKalanlar] = arabalar;
// console.log(araba1, araba2);
// console.log(geriKalanlar);

// // NESNELERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
// // spread
// const personel = {
//   adi: "ali",
//   soyad: "keriz",
//   meslek: "developer",
//   yas: 30,
// };
// const { adi, soyad, ...geriKalan } = personel;
// console.log(adi, soyad);
// console.log(geriKalan);

// // DIZILERI BIRLESTIRMEK ICIN DE KULLANILABILIR
// //rest
// const araclar = ["ucak", "araba", "helikopter", "bisiklet"];
// const otomobiller = ["kamyon", "otomobil", "otobus", "motor"];

// const yenidizi = [...araclar, ...otomobiller];
// console.log(yenidizi);

// const meyveler = ["elma", "armut", "muz", "kiraz", "incir"];
// const sebzeler = ["hiyar", "domates", "kabak", "patlican", "havuc"];

// const yenidizi2 = [...sebzeler, ...meyveler];
// console.log(yenidizi2);
