// ======================================================
//                   FOR DÖNGÜSÜ
// ======================================================
// const kordinatlar = [120, 100, -100, 220, 320];
// let negatif = 0;
// let pozitif = 0;

// for (let i = 0; i < kordinatlar.length; i++) {
//   kordinatlar[i] < 0 ? negatif++ : pozitif++;
// }

// console.log(negatif);
// console.log(pozitif);

// ======================================================
//                   FOR IN DÖNGÜSÜ
// ======================================================

//-------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğu
//  ana programa döndürecek fonksiyonu yazınız. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.
//--------------------------------------------------------

// const hayvanlar = ["fil", "fil", "deve", "kus", "deve", "fare", "kedi", "deve"];
// const ara = prompt("aramak istenilen hayvan türünü giriniz:").toLowerCase();

// const bulDondur = function () {
//   let hayvanSayisi = 0;
//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara) {
//       hayvanSayisi++;
//     }
//   }
//   return hayvanSayisi;
// };
// const sayi = bulDondur(ara);
// sayi == 0
//   ? console.log("Aradiginiz hayvan bulunamadi")
//   : console.log(`Aradiginiz ${ara} 'den ${sayi} adet bulunmaktadir`);

//============== FOR OF DONGUSU ===============================//
// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

// let arabalar = ["BMW", "Volvo", "Mini"];
// let yazi = "";
// for (let i of arabalar) {
//   console.log(i);
//   yazi += i + " ";
// }
// console.log(yazi);

//============== FOREACH METHODU ===============================//

// let ogrenciler = ["ali", "veli", "can", "kemal"];

// ogrenciler.forEach(yazdir);

// function yazdir(kisi) {
//   console.log(kisi);
// }

// == fiyat toplami bulma ==//
// 1. Yontem
// const fiyatlar = [200, 300, 400, 100, 450, 120];
// let toplam = 0;
// fiyatlar.forEach((fiyat) => (toplam += fiyat));

// console.log(toplam);

// document.getElementById("toplam").innerHTML = `${toplam}`;

// 2. Yontem
// const fiyatlar = [200, 300, 400, 100, 450, 120];
// toplam = 0;
// fiyatlar.forEach((a, i) => {
//   toplam += a;
//   console.log(`${i} . iterasyon: ${toplam}`);
// });

//=========================//
// fiyatlara %10 zam yapalim
// const fiyatlar = [200, 300, 400, 100, 450, 120];
// const yeniFiyat = [];
// let topl = 0;

// fiyatlar.forEach((d, i) => (yeniFiyat[i] = (d * 1.1).toFixed(2)));
// fiyatlar.forEach((fiyat) => (topl += fiyat));

// console.log(yeniFiyat);
// console.log(topl);
// document.getElementById("toplam").innerHTML = yeniFiyat;

//=======================================//
// farkli ornek
// const isimler = ["ali", "veli", "ilhan", "salih", "inci", "orhan"];

// isimler.forEach((isim) => console.log(isim));
// document.getElementById("ad").innerHTML = isimler;

//================ MAP METODU =================//
// const rakamlar = [3, 5, 6, 7, 9, 4, 1, 2];

// const ucKat = rakamlar.map((x) => x * 3);
// console.log(ucKat);

//== buyuk harfe cevir = pipeline yontemi ile
// const isimler = ["ali", "veli", "saffet"];

// const buyuk = isimler
//   .map((x) => x.toUpperCase())
//   .forEach((x) => console.log(x));
