// maaslar dizisi olusturduk
const maaslar = [3000, 4000, 5000, 8000, 2700, 3200, 6000, 9500];

const liste = document.createElement("ul");
liste.className = "liste";
document.getElementById("liste-div").appendChild(liste);

const listeyeEkle = function (satir) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(satir));
  liste.appendChild(li);
};

// yukardaki maaslari listeye ekledik
const diziyiListeyeEkle = function () {
  for (let i in maaslar) {
    listeyeEkle(maaslar[i]);
  }
};

const aciklamaGuncelle = function (dizi) {
  const aciklama = document.getElementById("aciklama");
  const yeniMaaslar = dizi.join(" ");
  aciklama.innerHTML = `Maaslar : ${yeniMaaslar} <br>
  ToplamMaas : ${dizi.reduce((x, y) => x + y, 0)}`;
};

diziyiListeyeEkle();
aciklamaGuncelle(maaslar);

//ekle butonuna islevsellik kazandirdik
document.getElementById("ekle").onclick = function () {
  let satir = document.getElementById("input");
  if (!satir.value) {
    alert("value required");
  } else {
    //inputtan gelen veriyi diziye kaydet
    maaslar.push(Number(satir.value));
    //inputtan gelen veriyi listeye ekle
    listeyeEkle(satir.value);
    // islemler bittikten sonra inputtan gelen veri silinecek
    satir.value = "";
    aciklamaGuncelle(maaslar);
  }
};

// sil butonunu calistirdik
document.getElementById("sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("silinecek eleman kalmadi");
  } else {
    maaslar.pop();
    const liste = document.querySelector(".liste");
    liste.removeChild(liste.lastElementChild);
    aciklamaGuncelle(maaslar);
  }
};

// ara butonuna islevsellik kazandirdik
document.getElementById("ara").onclick = function () {
  const satir = document.querySelector("input");
  if (!satir.value) {
    alert("aranacak maas limiti giriniz");
  } else {
    const filtrele = maaslar.filter((m) => m <= satir.value);
    if (filtrele.length == 0) {
      alert("aradiginiz deger bulunamadi");
    } else {
      aciklamaGuncelle(filtrele);
    }
  }
  satir.value = "";
};

// klavyeye enter tusu ile ekleme ozelligi kazandirdik
// keyCode 13 degerini ascii tablosundan aldik
document.querySelector("input").onkeydown = function (e) {
  if (e.keyCode === 13) {
    document.querySelector("#ekle").onclick();
  }
  if (e.keyCode === 46) {
    document.querySelector("#sil").onclick();
  }
};
