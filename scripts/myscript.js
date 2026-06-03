// ---  sepet ---
function sepeteEkle(urunAdi, fiyat) {
    let sepet = JSON.parse(localStorage.getItem('benimSepetim')) || [];
    sepet.push({ adi: urunAdi, fiyat: fiyat });
    localStorage.setItem('benimSepetim', JSON.stringify(sepet));
    alert(urunAdi + " sepetinize eklendi!");
}

function sepetiGoster() {
    let tabloGovdesi = document.getElementById('sepet-tablo-govdesi');
    let toplamAlani = document.getElementById('toplam-fiyat');
    
    if (!tabloGovdesi) return; 

    let sepet = JSON.parse(localStorage.getItem('benimSepetim')) || [];
    tabloGovdesi.innerHTML = ""; 
    let toplam = 0;

    sepet.forEach(urun => {
        let urunAdi = urun.adi || urun;
        let urunFiyati = urun.fiyat ? parseInt(urun.fiyat) : 0;
        tabloGovdesi.innerHTML += "<tr><td>" + urunAdi + "</td><td>" + urunFiyati + " Galleon</td></tr>";
        toplam += urunFiyati;
    });

    if (toplamAlani) {
        toplamAlani.innerText = "Toplam: " + toplam + " Galleon";
    }
}

function siparisTamamla() {
    let sepet = JSON.parse(localStorage.getItem('benimSepetim')) || [];
    if (sepet.length === 0) {
        alert("Sepetiniz boş!");
        return;
    }
    alert("Siparişiniz alındı! Baykuşlarımız yola çıkıyor.");
    localStorage.removeItem('benimSepetim');
    location.reload(); 
}

// --- şapka testi ---
const sorular = [
    { soru: "Hogwarts'ta en çok hangi derste başarılı olmak istersin?", cevaplar: [{ metin: "Karanlık Sanatlara Karşı Savunma", bina: "Gryffindor" }, { metin: "İksirler", bina: "Slytherin" }, { metin: "Tılsım ve Büyü Tarihi", bina: "Ravenclaw" }, { metin: "Bitkibilim", bina: "Hufflepuff" }] },
    { soru: "Hangi sihirli yeteneğe sahip olmak isterdin?", cevaplar: [{ metin: "Görünmez olmak", bina: "Gryffindor" }, { metin: "Zihin okumak", bina: "Slytherin" }, { metin: "Geleceği görmek", bina: "Ravenclaw" }, { metin: "Hayvanlarla konuşabilmek", bina: "Hufflepuff" }] },
    { soru: "Hogwarts'ta boş vaktini nerede geçirmeyi tercih edersin?", cevaplar: [{ metin: "Gürültülü ve sıcak Ortak Salon'da şömine başında", bina: "Gryffindor" }, { metin: "Kütüphanenin en sessiz köşesinde", bina: "Ravenclaw" }, { metin: "Sırlarla dolu Zindanlarda", bina: "Slytherin" }, { metin: "Mutfağa yakın, güneşli ve bitkilerle dolu seralarda", bina: "Hufflepuff" }] },
    { soru: "Ormanda yürürken önüne aniden bir Trol çıktı, ne yaparsın?", cevaplar: [{ metin: "Korkusuzca asımı çeker ve onunla savaşırım", bina: "Gryffindor" }, { metin: "Hemen etrafıma saklanacak bir yer arar ve zekice bir plan yaparım", bina: "Ravenclaw" }, { metin: "Trolün dikkatini başka yöne çeker ve sessizce oradan uzaklaşırım", bina: "Slytherin" }, { metin: "Yardım bulmak için hemen diğerlerine haber vermeye koşarım", bina: "Hufflepuff" }] },
    { soru: "Bir büyülü eşya seçme hakkın olsa hangisini seçerdin?", cevaplar: [{ metin: "Güçlü bir kılıç", bina: "Gryffindor" }, { metin: "Sonsuz bilgi veren bir kitap", bina: "Ravenclaw" }, { metin: "Koruyucu bir kolye", bina: "Hufflepuff" }, { metin: "Güç veren gizemli bir asa", bina: "Slytherin" }] },
    { soru: "İnsanlar seni genelde nasıl tanımlar?", cevaplar: [{ metin: "Cesur", bina: "Gryffindor" }, { metin: "Akıllı", bina: "Ravenclaw" }, { metin: "Güvenilir", bina: "Hufflepuff" }, { metin: "Hırslı", bina: "Slytherin" }] },
    { soru: "Yasak Orman’a gitmen gerekse nasıl davranırsın?", cevaplar: [{ metin: "Hemen giderim", bina: "Gryffindor" }, { metin: "Önce araştırma yaparım", bina: "Ravenclaw" }, { metin: "Bir grupla gitmeyi tercih ederim", bina: "Hufflepuff" }, { metin: "İşime yarayacaksa giderim", bina: "Slytherin" }] },
    { soru: "Bir yarışmada önemli olan nedir?", cevaplar: [{ metin: "Cesurca mücadele etmek", bina: "Gryffindor" }, { metin: "Strateji kurmak", bina: "Ravenclaw" }, { metin: "Takım ruhu", bina: "Hufflepuff" }, { metin: "Kazanmak", bina: "Slytherin" }] },
    { soru: "En çok hangi ortamı seversin?", cevaplar: [{ metin: "Heyecanlı ve hareketli yerler", bina: "Gryffindor" }, { metin: "Sessiz kütüphaneler", bina: "Ravenclaw" }, { metin: "Sıcak ve samimi ortamlar", bina: "Hufflepuff" }, { metin: "Güçlü insanların olduğu ortamlar", bina: "Slytherin" }] },
    { soru: "Bir Böcürt'ün (en büyük korkuna dönüşen yaratık) karşısına çıktın. Neye dönüşmesini beklersin?", cevaplar: [{ metin: "Sevdiklerimin zarar görmesine veya tehlikede olmasına.", bina: "Gryffindor" }, { metin: "Tüm gücümü, kontrolümü ve saygınlığımı kaybetmeye.", bina: "Slytherin" }, { metin: "Bilgisiz kalmaya, yanılmaya ve aptal durumuna düşmeye.", bina: "Ravenclaw" }, { metin: "Tamamen yalnız kalmaya ve sevdiklerim tarafından dışlanmaya.", bina: "Hufflepuff" }] }
];

let siradakiSoru = 0;
let puanlar = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };

function testeBasla() {
    siradakiSoru = 0;
    puanlar = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };
    document.getElementById("test-resmi").src = "img/secmen-sapka.jpg"; 
    document.getElementById("sonuc-alani").style.display = "none";
    document.getElementById("soru-alani").style.display = "block";
    soruGoster();
}

function soruGoster() {
    let soruAlani = document.getElementById("soru-metni");
    let butonAlani = document.getElementById("cevap-butonlari");
    soruAlani.innerHTML = "<strong>Soru " + (siradakiSoru + 1) + ":</strong> " + sorular[siradakiSoru].soru;
    butonAlani.innerHTML = "";

    let karisikCevaplar = sorular[siradakiSoru].cevaplar.sort(function() { return 0.5 - Math.random(); });
    for (let i = 0; i < karisikCevaplar.length; i++) {
        let cevap = karisikCevaplar[i];
        let yeniButon = document.createElement("button");
        yeniButon.innerHTML = cevap.metin;
        yeniButon.onclick = function() { cevapVer(cevap.bina); };
        butonAlani.appendChild(yeniButon);
    }
}

function cevapVer(secilenBina) {
    puanlar[secilenBina]++;
    siradakiSoru++;
    if (siradakiSoru < sorular.length) {
        soruGoster();
    } else {
        sonucuHesapla();
    }
}

function sonucuHesapla() {
    let enYuksekPuan = 0;
    let kazananBina = "";
    for (let bina in puanlar) {
        if (puanlar[bina] > enYuksekPuan) {
            enYuksekPuan = puanlar[bina];
            kazananBina = bina;
        }
    }
    document.getElementById("soru-alani").style.display = "none";
    document.getElementById("sonuc-alani").style.display = "block";
    document.getElementById("sonuc-baslik").innerHTML = kazananBina + "!";
    
    let resimler = {
        "Gryffindor": "img/gryffindor.jpg",
        "Slytherin": "img/slytherin.jpg",
        "Ravenclaw": "img/ravenclaw.jpg",
        "Hufflepuff": "img/hufflepuff.jpg"
    };
    document.getElementById("test-resmi").src = resimler[kazananBina];
}
document.addEventListener("DOMContentLoaded", function() {
    
    sepetiGoster();
    // İletişim Formu
    let baykusForm = document.getElementById("baykusForm");
    if (baykusForm) {
        baykusForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            alert("Baykuşunuz yola çıktı!");
            baykusForm.reset(); 
        });
    }
    // Siparişi Tamamla 
    let siparisBtn = document.getElementById('siparisBtn');
    if (siparisBtn) {
        siparisBtn.addEventListener('click', siparisTamamla);
    }

    // Sepete Ekle Butonu 
    let addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            let h2Element = document.querySelector('.product-detail h2');
            let urunAdi = h2Element ? h2Element.innerText.trim() : "Bilinmeyen Ürün";
            let kutuMetni = document.querySelector('.product-detail').innerText;
            let fiyatEslesme = kutuMetni.match(/(\d+)\s*Galleon/i);
            let fiyat = fiyatEslesme ? parseInt(fiyatEslesme[1]) : 0;
                
            sepeteEkle(urunAdi, fiyat);
        });
    }

    // Seçmen Şapka Test Başlat
    let testBaslaBtn = document.getElementById('testBaslaBtn');
    if (testBaslaBtn) {
        testBaslaBtn.addEventListener('click', testeBasla);
    }

    // Seçmen Şapka Test Tekrar
    let testTekrarBtn = document.getElementById('testTekrarBtn');
    if (testTekrarBtn) {
        testTekrarBtn.addEventListener('click', function() { location.reload(); });
    }
  } );