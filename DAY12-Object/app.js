//=============================================================//
//                   OBJECTS
//============================================================//

// Diziler komlex ise erisim guclugu olusur
// dolayisiyla indisleme ile erisim yapilir
// sirali belleklerde ihtiyac varsa (structred) dizi kullanmak mantiklidir
//eger veriler kompleks ise o zaman dizilerde erisim guclugu ortaya cikar

// nesnelerde key-value (property-value) yapisi kullanilir
// nesnelerde aradigimiz veriye erismke icin property aidini kullanmak yeterlidir

// const insan = {
//   ad: "ali",
//   soyad: "kel",
//   yas: 30,
//   meslek: "developer",
//   diller: "java, js, c++, sql",
// };

// bu notasyon ile verilere erismke mumkundur
// console.log(insan);

// // koseli parantez ile expression yazmak mumkundur
// console.log(insan.ad);
// console.log(insan["diller"]);

// const yazi = "adim";

// console.log(`${yazi} ${insan.ad} ve yasim ${insan.yas} `);

// const bilgi = prompt(
//   "insan nesnesi hakkindan ne bilmek istersin?\n seciminizi giriniz : ad, soyad, yas, meslek, ve diller"
// );

// if (insan[bilgi]) {
//   console.log(insan[bilgi]);
// } else {
//   console.log("dogru secim yapiniz");
// }

// insan.konum = "turkiye";
// insan.email = "insan@gmail.com";
// insan["dogumTarihi"] = 1990;

// console.log(insan);

// const kisi = {
//   ad: "ahmet",
//   soyad: "kral",
//   dTarihi: 1990,
//   meslek: "tester",
//   tool: "selenium",
//   ehliyet: "B",
//   yasHesapla: function () {
//     console.log(this);
//     return new Date().getFullYear() - this.dTarihi;
//   },
//   ozet: function () {
//     return `${this.ad} ${this.soyad} ${this.yasHesapla()} ${this.meslek} `;
//   },
// };

// console.log(kisi.yasHesapla);
// console.log(kisi);

// const tarih = new Date();
// console.log(tarih.getDay());
// console.log(tarih.getMonth());
// console.log(tarih.getFullYear());

// console.log(kisi.yasHesapla());
// console.log(kisi.ozet());

//====================================================
//                NESNE ITERASYONLARI
//====================================================

// const kisiler = [
//   {
//     ad: "ali",
//     soyad: "can",
//     meslek: "developer",
//     yas: 33,
//   },
//   {
//     ad: "ayse",
//     soyad: "canan",
//     meslek: "tester",
//     yas: 44,
//   },
//   {
//     ad: "ahmet",
//     soyad: "canli",
//     meslek: "team lead",
//     yas: 23,
//   },
//   {
//     ad: "aysel",
//     soyad: "canbek",
//     meslek: "grafiker",
//     yas: 35,
//   },
//   {
//     ad: "alev",
//     soyad: "cansiz",
//     meslek: "developer",
//     yas: 29,
//   },
// ];
// console.log(kisiler);

// kisiler.forEach((x) => console.log(x.meslek));

// // kisilerin yasini bir arttirdik
// const yaslar = kisiler.map((x) => x.yas + 1).forEach((x) => console.log(x));

// // yeni bir map ifadesi olusturduk ve ismi buykharfe ve yasi 5 arttirdik
// const isimler = kisiler.map((x) => {
//   return {
//     ad: x.ad.toUpperCase(),
//     yas: x.yas + 5,
//   };
// });
// console.log(isimler);

// kisiler.filter((x) => x.yas <= 25).forEach((a) => console.log(a.ad));

// //meslegi developer olan kisilerin ad ve yaslarini yazdirdik
// kisiler
//   .filter((x) => x.meslek == "developer")
//   .forEach((a) => console.log(a.ad, a.yas));

// // kisilerin yas ortalamasini bulduk
// const yasOrt = kisiler.reduce((x, y) => x + y.yas, 0) / kisiler.length;
// console.log(yasOrt);
