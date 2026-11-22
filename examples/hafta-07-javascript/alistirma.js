// =====================================================================
//  ALISTIRMA — Hafta 07
//  Konsolda ya da  node alistirma.js  ile calistirin.
// =====================================================================

const sayilar = [3, 8, 12, 7, 20, 5, 14];

// ---------------------------------------------------------------------
// 1. GOREV — dizideki sayilarin toplamini dondurun.
//    Once dongu ile yazin; sonra reduce ile deneyin.
// ---------------------------------------------------------------------
function topla(dizi) {
  // buraya yazin
}

console.log("1) toplam:", topla(sayilar));   // beklenen: 69


// ---------------------------------------------------------------------
// 2. GOREV — yalnizca cift sayilardan olusan YENI bir dizi uretin.
//    Ipucu: bir sayi ciftse  n % 2 === 0  dogrudur.
// ---------------------------------------------------------------------
const ciftler = null;   // buraya yazin

console.log("2) ciftler:", ciftler);         // beklenen: [8, 12, 20, 14]


// ---------------------------------------------------------------------
// 3. GOREV — uc alanli bir urun nesnesi olusturun ve alanlarini basin.
//    Alanlar: ad (metin), fiyat (sayi), stok (dogru/yanlis)
// ---------------------------------------------------------------------
const urun = {
  // buraya yazin
};

console.log("3) ad:", urun.ad);
console.log("3) fiyat:", urun.fiyat);
console.log("3) stok:", urun.stok);


// ---------------------------------------------------------------------
// 4. GOREV — bir fonksiyonu baska bir fonksiyona parametre olarak gecirin.
//    ikiKereCalistir, verilen islevi iki kez cagirmali.
// ---------------------------------------------------------------------
function ikiKereCalistir(islev) {
  // buraya yazin
}

ikiKereCalistir(() => console.log("4) merhaba"));
// beklenen: iki satir "4) merhaba"


// ---------------------------------------------------------------------
// BITIRENLER — topla fonksiyonunu arrow yazimiyla yeniden yazin.
// ---------------------------------------------------------------------
const topla2 = null;   // buraya yazin

// console.log("bonus) toplam:", topla2(sayilar));
