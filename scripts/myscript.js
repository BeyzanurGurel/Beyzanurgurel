function secmenSapkaOyunu() {
    // 1. Kullanıcıdan isim al. Geri tıklar (iptal) veya boş bırakırsa C#'taki gibi 'return' ile fonksiyonu durdur.
    let isim = prompt("Sihir dükkanımıza hoş geldin! Büyücü adın nedir?");
    
    if (!isim) {
        alert("İsmini söylemezsen şapka çalışmaz!");
        return; 
    }

    // 2. Seçim sorusunu sor. (Ters tırnak ` kullanımı, metinleri daha rahat birleştirmeyi sağlar)
    let soru = `Merhaba ${isim}! Seçmen Şapka'ya hoş geldin. Senin için en önemli özellik hangisi?
    1 - Cesaret
    2 - Zeka
    3 - Hırs
    4 - Sadakat
    (Lütfen 1, 2, 3 veya 4 yaz)`;
               
    let cevap = prompt(soru);
    
    // 3. HTML içindeki elemanları (Div ve Resim) yakala
    let sonucAlani = document.getElementById("sonuc-alani");
    let sapkaResmi = document.getElementById("sapka-resmi");

    // 4. Cevaba göre HTML'in içine (innerHTML) metin bas ve CSS rengini (borderColor) değiştir
    if (cevap === "1") {
        sonucAlani.innerHTML = `Tebrikler ${isim}! Binan: <span style="color: #740001;">GRYFFINDOR!</span> Cesaretin sana yol gösterecek.`;
        sapkaResmi.style.borderColor = "#740001"; // Bordo
        
    } else if (cevap === "2") {
        sonucAlani.innerHTML = `Tebrikler ${isim}! Binan: <span style="color: #0e1a40;">RAVENCLAW!</span> Zekanla sınırları aşacaksın.`;
        sapkaResmi.style.borderColor = "#0e1a40"; // Lacivert
        
    } else if (cevap === "3") {
        sonucAlani.innerHTML = `Tebrikler ${isim}! Binan: <span style="color: #1a472a;">SLYTHERIN!</span> Hırsın seni zirveye taşıyacak.`;
        sapkaResmi.style.borderColor = "#1a472a"; // Yeşil
        
    } else if (cevap === "4") {
        sonucAlani.innerHTML = `Tebrikler ${isim}! Binan: <span style="color: #eeb939;">HUFFLEPUFF!</span> Sadakatin en büyük gücün.`;
        sapkaResmi.style.borderColor = "#eeb939"; // Sarı
        
    } else {
        sonucAlani.innerHTML = "Şapka kafanın karıştığını hissetti... Lütfen sadece 1, 2, 3 veya 4 yazarak tekrar dene!";
        sonucAlani.style.color = "#333";
    }
}