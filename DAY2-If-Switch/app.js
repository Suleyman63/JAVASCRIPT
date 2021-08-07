//=========== IF ELSE =====================//

// const s1 = prompt("birinci sayiyi giriniz");
// const islem = prompt("islem giriniz");
// const s2 = prompt("ikinci sayiyi giriniz");
// let sonuc = 0;

// if ((islem = "+")) {
//   sonuc = s1 + s2;
// } else if ((islem = "-")) {
//   sonuc = s1 - s2;
// } else if ((islem = "*")) {
//   sonuc = s1 * s2;
// } else if ((islem = "/")) {
//   sonuc = s1 / s2;
// } else {
//   alert("yanlis islem girdiniz");
// }
// console.log(`${s1} ${islem} ${s2}=${sonuc}`);

/*********************************** */

// let ogrenciNot = document.getElementById("ogrnot");
// ogrenciNot.onchange = notHesapla;

// function notHesapla() {
//   let ogrenciNotu = Number(ogrenciNot.value); //dışarıdaki global nesnseyi alıyor

//   let durumGoster = document.getElementById("durumgoster");
//   if (ogrenciNotu < 0) {
//     durumGoster.innerHTML = "HATALI NOT";
//   } else if (ogrenciNotu < 50) {
//     durumGoster.innerHTML = "KALDINIZ";
//   } else if (ogrenciNotu < 60) {
//     durumGoster.innerHTML = "GEÇER";
//   } else if (ogrenciNotu < 70) {
//     durumGoster.innerHTML = "ORTA";
//   } else if (ogrenciNotu < 85) {
//     durumGoster.innerHTML = "İYİ";
//   } else if (ogrenciNotu <= 100) {
//     durumGoster.innerHTML = "PEKİYİ";
//   } else {
//     durumGoster.innerHTML = "HATALI NOT";
//   }
// }
/************************************ */
// let sayiNesne = document.getElementById("sayi");
// let hesaplaBtn = document.getElementById("hesapla");

// hesaplaBtn.onclick = islemYap;

// function islemYap() {
//   let sayi = Number(sayiNesne.value);

//   let durumGoster = document.getElementById("durumgoster");
//   if (sayi < 0) {
//     durumGoster.innerHTML = "NEGATİF";
//   } else if (sayi > 0) {
//     durumGoster.innerHTML = "POZİTİF";
//   } else {
//     durumGoster.innerHTML = "SIFIR";
//   }
// }
//=========== SWITCH CASE =====================//
// const gun = Number(prompt("Gun numarasini giriniz:"));
// switch (gun) {
//   case 1:
//     alert("pazartesi");
//     break;
//   case 2:
//     alert("sali");
//     break;
//   case 3:
//     alert("carsamba");
//     break;
//   case 4:
//     alert("persembe");
//     break;
//   case 5:
//     alert("cuma");
//     break;
//   case 6:
//     alert("cumartesi");
//     break;
//   case 7:
//     alert("pazar");
//     break;
//   default:
//     alert("gecerli bir gun giriniz");
//     break;
// }
// console.log(gun);

// let meyve = "Şeftali";

// switch (meyve) {
//   case "Kiraz":
//     alert("Yaz meyvesi");
//     break;

//   case "Mandalin":
//     alert("Kış meyvesi");
//     break;

//   case "Erik":
//     alert("Bahar meyvesi");
//     break;

//   case "Şeftali":
//     alert("Yaz meyvesi");
//     break; //Ekran çıktısı

//   default:
//     alert("Herhangi bir mevsimin meyvesi");
// }
//==================== Ternary ============================//
// const maas = prompt("maas giriniz");
// const yil = prompt("calisma suresi giriniz");

// const zamliMaas = yil > 10 ? maas * 1.5 : yil > 5 ? maas * 1.2 : maas * 1.1;

// console.log(zamliMaas);

// const borc = 0;
// const maas = 3000;
// console.log(!borc && maas > 2800 ? "kredi alabilir" : "kredi alamaz");

// const age = prompt("yasinizi giriniz");
// const health = prompt("saglikli misiniz e/h");

// const result =
//   age > 18 && health == "e" ? "askere gidebilir" : "askere gidemez";
// console.log(result);
// alert(result);

//==================== DONGULER ====================//
// const sayi = prompt("sayi giriniz");
// for (let i = 1; i <= sayi; i++) {
//   console.log("${i}-murat");
// }

// ===== asal sayi ==========//

// const number = Number(prompt("sayi giriniz"));

// let asal = true;
// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//     asal = false;
//     break;
//   }
// }
// const result = asal ? "asal" : "asal degil";
// console.log(result);
