function secmenSapkaOyunu() {
    let isim = prompt("Sihir dükkanımıza hoş geldin! Büyücü adın nedir?");
    
    if (!isim) {
        alert("İsmini söylemezsen şapka çalışmaz!");
        return; 
    }
    
    // HTML elemanlarını yakala
    let sonucAlani = document.getElementById("sonuc-alani");
    let sapkaResmi = document.getElementById("sapka-resmi");
    
    // Rengi sıfırla (eğer sonucAlani varsa)
    if (sonucAlani) {
        sonucAlani.style.color = "inherit";
    }

    let soru = `Merhaba ${isim}! Seçmen Şapka'ya hoş geldin. Senin için en önemli özellik hangisi?
    1 - Cesaret
    2 - Zeka
    3 - Hırs
    4 - Sadakat
    (Lütfen 1, 2, 3 veya 4 yaz)`;
               
    let cevap = prompt(soru);
    
    if (cevap === "1") {
        sonucAlani.innerHTML = `Tebrikler ${isim}! Binan: <span style="color: #4f0102;">GRYFFINDOR!</span> Cesaretin sana yol gösterecek.`;
        if (sapkaResmi) sapkaResmi.style.borderColor = "#740001";
        
    } else if (cevap === "2") {
        sonucAlani.innerHTML = `Tebrikler ${isim}! Binan: <span style="color: #0942fd;">RAVENCLAW!</span> Zekanla sınırları aşacaksın.`;
        if (sapkaResmi) sapkaResmi.style.borderColor = "#0e1a40";
        
    } else if (cevap === "3") {
        sonucAlani.innerHTML = `Tebrikler ${isim}! Binan: <span style="color: #1a472a;">SLYTHERIN!</span> Hırsın seni zirveye taşıyacak.`;
        if (sapkaResmi) sapkaResmi.style.borderColor = "#1a472a";
        
    } else if (cevap === "4") {
        sonucAlani.innerHTML = `Tebrikler ${isim}! Binan: <span style="color: #eeb939;">HUFFLEPUFF!</span> Sadakatin en büyük gücün.`;
        if (sapkaResmi) sapkaResmi.style.borderColor = "#eeb939";
        
    } else {
        sonucAlani.innerHTML = "Şapka kafanın karıştığını hissetti... Lütfen sadece 1, 2, 3 veya 4 yazarak tekrar dene!";
        sonucAlani.style.color = "#ff0000";
    }
}
function sepeteEkle(urunAdi, fiyat) {
    let sepet = JSON.parse(localStorage.getItem('benimSepetim')) || [];
    // Artık ürün ve fiyatı bir nesne olarak kaydediyoruz
    sepet.push({ adi: urunAdi, fiyat: fiyat });
    localStorage.setItem('benimSepetim', JSON.stringify(sepet));
    alert(urunAdi + " sepetinize eklendi!");
}