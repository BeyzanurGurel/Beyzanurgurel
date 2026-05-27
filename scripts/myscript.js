

// --- SEPET İŞLEMLERİ ---
function sepeteEkle(urunAdi, fiyat) {
    let sepet = JSON.parse(localStorage.getItem('benimSepetim')) || [];
    // Artık ürün ve fiyatı bir nesne olarak kaydediyoruz
    sepet.push({ adi: urunAdi, fiyat: fiyat });
    localStorage.setItem('benimSepetim', JSON.stringify(sepet));
    alert(urunAdi + " sepetinize eklendi!");
}


// --- YENİ SEÇMEN ŞAPKA GÖRSEL TESTİ ---

// Sorular ve Cevaplar Dizisi
const sorular = [
    {
        soru: "Önünde dört farklı yol var. Hangisini seçersin?",
        cevaplar: [
             { metin: "Karanlık, kestirme ve tehlikeli ara sokağı.", bina: "Slytherin" },
            { metin: "Güneşli, yeşil ve güvenli görünen patikayı.", bina: "Hufflepuff" },
           
            { metin: "Eski yazıtlarla dolu, bilinmeyen taş yolu.", bina: "Ravenclaw" },
            { metin: "Ejderha kükremelerinin geldiği sarp dağ yolunu.", bina: "Gryffindor" }
        ]
    },
    {
        soru: "Hogwarts'ta en çok hangi derste başarılı olmak istersin?",
        cevaplar: [
             { metin: "Bitkibilim", bina: "Hufflepuff" },
            { metin: "Karanlık Sanatlara Karşı Savunma", bina: "Gryffindor" },
            { metin: "İksirler", bina: "Slytherin" },
            { metin: "Tılsım ve Büyü Tarihi", bina: "Ravenclaw" }
           
        ]
    },
    {
        soru: "Bir sandık buldun. İçinden hangisini alırsın?",
        cevaplar: [
            { metin: "Parlayan, eski ve bilge bir parşömen.", bina: "Ravenclaw" },
            ,
            { metin: "İçinde ne olduğu bilinmeyen gizemli bir şişe.", bina: "Slytherin" },
            { metin: "Üstünde 'Sadakat' yazan altın bir kupa.", bina: "Hufflepuff" },
            { metin: "Görkemli ve güçlü bir kılıç.", bina: "Gryffindor" }
        ]
    }
];

let siradakiSoru = 0;
let puanlar = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };

function testeBasla() {
    siradakiSoru = 0;
    puanlar = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };
    soruGoster();
}

function soruGoster() {
    let soruAlani = document.getElementById("soru-metni");
    let butonAlani = document.getElementById("cevap-butonlari");

    // Mevcut soruyu ekrana yazdır
    soruAlani.innerHTML = "<strong>Soru " + (siradakiSoru + 1) + ":</strong> " + sorular[siradakiSoru].soru;
    
    // Eski butonları temizle
    butonAlani.innerHTML = "";

    // Yeni cevap butonlarını oluştur
    for (let i = 0; i < sorular[siradakiSoru].cevaplar.length; i++) {
        let cevap = sorular[siradakiSoru].cevaplar[i];
        
        let yeniButon = document.createElement("button");
        yeniButon.innerHTML = cevap.metin;
        yeniButon.onclick = function() { cevapVer(cevap.bina); };
        
        butonAlani.appendChild(yeniButon);
    }
}

function cevapVer(secilenBina) {
    // Seçilen binanın puanını 1 artır
    puanlar[secilenBina]++;
    siradakiSoru++;

    // Eğer sorular bittiyse sonucu göster, bitmediyse sıradaki soruyu getir
    if (siradakiSoru < sorular.length) {
        soruGoster();
    } else {
        sonucuHesapla();
    }
}

function sonucuHesapla() {
    // En yüksek puanlı binayı bul
    let enYuksekPuan = 0;
    let kazananBina = "";

    for (let bina in puanlar) {
        if (puanlar[bina] > enYuksekPuan) {
            enYuksekPuan = puanlar[bina];
            kazananBina = bina;
        }
    }

    // Soruları gizle, Sonuç alanını göster
    document.getElementById("soru-alani").style.display = "none";
    document.getElementById("sonuc-alani").style.display = "block";

    // Resmi ve yazıları değiştir
    let sonucResmi = document.getElementById("test-resmi");
    let sonucBaslik = document.getElementById("sonuc-baslik");
    let sonucMetni = document.getElementById("sonuc-metni");

    sonucBaslik.innerHTML = kazananBina + "!";
    
    if (kazananBina === "Gryffindor") {
        sonucResmi.src = "img/gryffindor.jpg";
        sonucMetni.innerHTML = "Cesaretin ve kararlılığın seni Gryffindor'a yerleştirdi!";
    } else if (kazananBina === "Slytherin") {
        sonucResmi.src = "img/slytherin.jpg";
        sonucMetni.innerHTML = "Hırsın ve kurnazlığın seni Slytherin'e yerleştirdi!";
    } else if (kazananBina === "Ravenclaw") {
        sonucResmi.src = "img/ravenclaw.jpg";
        sonucMetni.innerHTML = "Zekân ve bilgeliğin seni Ravenclaw'a yerleştirdi!";
    } else if (kazananBina === "Hufflepuff") {
        sonucResmi.src = "img/hufflepuff.jpg";
        sonucMetni.innerHTML = "Sadakatin ve çalışkanlığın seni Hufflepuff'a yerleştirdi!";
    }
}