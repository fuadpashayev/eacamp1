// Subhanin casusu
const subhaninCasusu = (casusunEldeElediyiMelumatlar) => {
  console.log(
    "subhanin casusunun elde elediyi melumatlar: ",
    casusunEldeElediyiMelumatlar
  );
};

// ana funksiya
function dusmen(muzdlu_casus, turist_SubhaninCasusu) {
  const dusmenSayi = 35;
  const dusmenSilahi = 200;
  const dusmenPlani = "Bizi mehv etmek";

  muzdlu_casus({
    dusmenlerin_sayi: dusmenSayi,
  });

  turist_SubhaninCasusu({
    dusmendeki_silahlarin_sayi: dusmenSilahi,
    plan_nedir: dusmenPlani,
  });
}

// Subhan casusu gonderir ki getsin hansisa melumatlari ana funksiyadan alsin
dusmen((casusunEldeElediyiMelumatlar) => {
  // yolda tapdigimiz ve pulla elde elediyimiz muzdlu casus
  console.log(
    "muzdlu casusun elde elediyi melumatlar: ",
    casusunEldeElediyiMelumatlar
  );
}, subhaninCasusu);
