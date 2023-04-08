

  const bacakSayisi = {
    inek : 4,
    tavuk : 2,
    koyun : 4,
    domuz : 4
  };

  const hayvanlar = ["inek", "tavuk", "koyun", "domuz"];

  let toplamAyakSayisi = 0;
  for (let i = 0; i < hayvanlar.length; i++) {
    const hayvanTuru = hayvanlar[i];
    if (hayvanTuru !=="domuz") { 
        const ayakSayisi = bacakSayisi[hayvanTuru];
        toplamAyakSayisi += ayakSayisi;
    }
  }

  console.log(`Kullanilabilecek Ayak Sayisi Toplami: ${toplamAyakSayisi}`);
