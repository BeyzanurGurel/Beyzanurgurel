

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
// Sorular ve Cevaplar Dizisi (10 Soruluk Tam Sürüm)
const sorular = [
    {
        soru: "Hogwarts'ta en çok hangi derste başarılı olmak istersin?",
        cevaplar: [
            { metin: "Karanlık Sanatlara Karşı Savunma", bina: "Gryffindor" },
            { metin: "İksirler", bina: "Slytherin" },
            { metin: "Tılsım ve Büyü Tarihi", bina: "Ravenclaw" },
            { metin: "Bitkibilim", bina: "Hufflepuff" }
        ]
    },
    {
        soru: "Hangi sihirli yeteneğe sahip olmak isterdin?",
        cevaplar: [
            { metin: "Görünmez olmak", bina: "Gryffindor" },
            { metin: "Zihin okumak", bina: "Slytherin" },
            { metin: "Geleceği görmek", bina: "Ravenclaw" },
            { metin: "Hayvanlarla konuşabilmek", bina: "Hufflepuff" }
        ]
    },
    {
        soru: "Hogwarts'ta boş vaktini nerede geçirmeyi tercih edersin?",
        cevaplar: [
            { metin: "Gürültülü ve sıcak Ortak Salon'da şömine başında", bina: "Gryffindor" },
            { metin: "Kütüphanenin en sessiz köşesinde", bina: "Ravenclaw" },
            { metin: "Sırlarla dolu Zindanlarda", bina: "Slytherin" },
            { metin: "Mutfağa yakın, güneşli ve bitkilerle dolu seralarda", bina: "Hufflepuff" }
        ]
    },
    {
        soru: "Ormanda yürürken önüne aniden bir Trol çıktı, ne yaparsın?",
        cevaplar: [
            { metin: "Korkusuzca asımı çeker ve onunla savaşırım", bina: "Gryffindor" },
            { metin: "Hemen etrafıma saklanacak bir yer arar ve zekice bir plan yaparım", bina: "Ravenclaw" },
            { metin: "Trolün dikkatini başka yöne çeker ve sessizce oradan uzaklaşırım", bina: "Slytherin" },
            { metin: "Yardım bulmak için hemen diğerlerine haber vermeye koşarım", bina: "Hufflepuff" }
        ]
    },
    {
        soru: "Bir büyülü eşya seçme hakkın olsa hangisini seçerdin?",
        cevaplar: [
            { metin: "Güçlü bir kılıç", bina: "Gryffindor" },
            { metin: "Sonsuz bilgi veren bir kitap", bina: "Ravenclaw" },
            { metin: "Koruyucu bir kolye", bina: "Hufflepuff" },
            { metin: "Güç veren gizemli bir asa", bina: "Slytherin" }
        ]
    },
    {
        soru: "İnsanlar seni genelde nasıl tanımlar?",
        cevaplar: [
            { metin: "Cesur", bina: "Gryffindor" },
            { metin: "Akıllı", bina: "Ravenclaw" },
            { metin: "Güvenilir", bina: "Hufflepuff" },
            { metin: "Hırslı", bina: "Slytherin" }
        ]
    },
    {
        soru: "Yasak Orman’a gitmen gerekse nasıl davranırsın?",
        cevaplar: [
            { metin: "Hemen giderim", bina: "Gryffindor" },
            { metin: "Önce araştırma yaparım", bina: "Ravenclaw" },
            { metin: "Bir grupla gitmeyi tercih ederim", bina: "Hufflepuff" },
            { metin: "İşime yarayacaksa giderim", bina: "Slytherin" }
        ]
    },
    {
        soru: "Bir yarışmada önemli olan nedir?",
        cevaplar: [
            { metin: "Cesurca mücadele etmek", bina: "Gryffindor" },
            { metin: "Strateji kurmak", bina: "Ravenclaw" },
            { metin: "Takım ruhu", bina: "Hufflepuff" },
            { metin: "Kazanmak", bina: "Slytherin" }
        ]
    },
    {
        soru: "En çok hangi ortamı seversin?",
        cevaplar: [
            { metin: "Heyecanlı ve hareketli yerler", bina: "Gryffindor" },
            { metin: "Sessiz kütüphaneler", bina: "Ravenclaw" },
            { metin: "Sıcak ve samimi ortamlar", bina: "Hufflepuff" },
            { metin: "Güçlü insanların olduğu ortamlar", bina: "Slytherin" }
        ]
    },
    {
        soru: "Bir Böcürt'ün (en büyük korkuna dönüşen yaratık) karşısına çıktın. Neye dönüşmesini beklersin?",
        cevaplar: [
            { metin: "Sevdiklerimin zarar görmesine veya tehlikede olmasına.", bina: "Gryffindor" },
            { metin: "Tüm gücümü, kontrolümü ve saygınlığımı kaybetmeye.", bina: "Slytherin" },
            { metin: "Bilgisiz kalmaya, yanılmaya ve aptal durumuna düşmeye.", bina: "Ravenclaw" },
            { metin: "Tamamen yalnız kalmaya ve sevdiklerim tarafından dışlanmaya.", bina: "Hufflepuff" }
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

    // YENİ KOD: Şıkları W3Schools taktiğiyle rastgele karıştır
    let karisikCevaplar = sorular[siradakiSoru].cevaplar.sort(function() { 
        return 0.5 - Math.random(); 
    });

    // Yeni ve karışık cevap butonlarını oluştur
    for (let i = 0; i < karisikCevaplar.length; i++) {
        let cevap = karisikCevaplar[i];
        
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