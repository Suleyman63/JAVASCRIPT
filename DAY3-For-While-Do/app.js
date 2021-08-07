//==================== DONGULER ====================//
//============== FOR =======================//
// const sayi = prompt("sayi giriniz");
// for (let i = 1; i <= sayi; i++) {
//   console.log("${i}-murat");
// }

// for (let i = 1; i <= 20; i++) {
//   let tek = i % 2; // 2'ye tam bölünmezse tek sayı

//   if (tek != 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 9; i++) {
//   let sonuc = 5 * i;

//   console.log(`5 x ${i} = ${sonuc}`);
// }

// let i, j;
// for (i = 9; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     let x = `${i} * ${j} = ${i * j}
// `;

//     document.write(x);
//   }
// }

// let metin = window.prompt("Metni Girin");
// let adet = window.prompt("Metin kaç defa yazdırılsın");
// for (let i = 1; i <= adet; i++) {
//   document.write(metin + "<br>");
// }

// let toplam = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     if (i != 90) {
//       console.log(i + "+");
//     } else {
//       console.log(i + "=");
//     }
//     toplam += i;
//   }
// }
// console.log(toplam);

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let mesaj = prompt("Mesaj Girin");
// let sayi = prompt("Tekrar Sayısını Girin");
// for (let i = 0; i < sayi; i++) {
//   console.log(mesaj);
// }

// for (let i = 0; i < 10; i++) {
//   for (let x = 0; x < i; x++) {
//     console.log(" ");
//   }
//   console.log("*");
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

// let i, j;
// for (i = 9; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     let x = `${i} * ${j} = ${i * j}`;

//     console.log(x);
//   }
// }

// for (let i = 1; i <= 20; i++) {
//   // if (i % 2 == 0) {
//   //   console.log(i);
//   // }
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

//============== WHILE =======================//

// let not = prompt("0-100 arasinda bir not giriniz");

// while (not < 0 || not > 100) {
//   console.error("not 0 ile 100 arasinda olmalidir");
//   not = prompt("0-100 arasinda bir not giriniz");
// }
// console.log("girilen not 0-100 arasindadir");

//============== DO WHILE =======================//

// let not;
// do {
//   not = prompt("0-100 arasinda bir not giriniz");
// } while (not > 0 || not < 100);
// console.log("girilen not 0-100 arasindadir");

// let not1;
// let i = 1;
// while (true) {
//   not1 = prompt(i + "- kisinin notunu giriniz...");
//   not1 = not1.toLoweCase();
//   if (not1 == "q") {
//     break;
//   }
//   i++;
//   console.log(Number(not1));
// }
