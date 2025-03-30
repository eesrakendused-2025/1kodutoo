function updateClock() {
    // reaalne kell uuendatakse controls.js-is, seda soovitas gpt, peale clock.html prompti, et teha kella seadete ja heliga seotud asjad kõik eraldi javascripti controls.js, mida ma ka tegin.
  }
  

  //Nagu clock.html failis mainitud, soovisin teha saaremaa piltidest taustapildid,  mida saab siis seadetest valida, nii siis pidin talle söötma pildinimed et ta saaks järgmised read valmis kirjutada
  const backgroundEl = document.getElementById('background-overlay');
  
  const backgrounds = [
    'backgrounds/kiipsaare.jpg',
    'backgrounds/koigi.jpg',
    'backgrounds/loss.jpg',
    'backgrounds/sorve.jpg',
    'backgrounds/vilsandi.jpg'
  ];
  
  let currentBg = 0;
  
  // Preloadi kasuks otsustasin peale seda kui märkasin et ainult eelmise osaga tasuta vahetus nuppu vajutades laadis ta pilte väga hakkivalt üles, seetõttu kirjutasin chatGPT-le:
  //Prompt: Tahaks, et pildi vahetus toimiks kuidagi sujuvalt ja ei hakiks niipalju, mis peale pakkus chatGPT välja, et preloadiks kõik pildid, kui leht esimest korda laeb.
  const preloadedImages = [];
  backgrounds.forEach((src) => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
  });
  

  //Funktsioon taustavahetuseks, mille gpt lõi eelmiste promptidega juba.
  function changeBackground() {
    currentBg = (currentBg + 1) % backgrounds.length;
    const nextImage = backgrounds[currentBg];
    backgroundEl.style.backgroundImage = `url('${nextImage}')`;
  }
  
  // Esimene laadimine,kui lehele saabub, laeb pildid mällu
  window.addEventListener('load', () => {
    changeBackground();
  });
  