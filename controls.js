
// Kogu lahendus pakutud chatGPT poolt, mis peale nõuete ja oma idee sisestamist välja pakkus(genereeris), muutsin ainult fontSize natuke erinevaks ja translationis paari nimetust. 
document.addEventListener('DOMContentLoaded', () => {
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsPanel = document.getElementById('settings-panel');
    const clockEl = document.getElementById('clock');
    const dateEl = document.getElementById('date');
    const clockContainer = document.getElementById('clock-container');
  
    let currentLang = 'et';
    let is24h = true;
  
    let fontSizes = ['4vw', '7vw', '10vw'];
    let currentSize = 1;
  
    let colors = ['white', 'lightblue', 'lightgreen', 'gold', 'pink'];
    let currentColor = 0;
  
    let fonts = ['Orbitron', 'Raleway', 'Rubik'];
    let currentFont = 0;
  
    let positions = ['center', 'flex-start', 'flex-end'];
    let currentPosition = 0;
  
    const translations = {
      et: {
        settings: "Seaded",
        size: "Muuda suurust",
        color: "Muuda värvi",
        font: "Muuda fonti",
        position: "Muuda asukohta",
        bg: "Muuda tausta"
      },
      en: {
        settings: "Settings",
        size: "Change size",
        color: "Change color",
        font: "Change font",
        position: "Change position",
        bg: "Change background"
      }
    };

    function updateLabels() {
      const t = translations[currentLang];
      document.getElementById('settings-toggle').textContent = `⚙️ ${t.settings}`;
      document.getElementById('font-size-btn').textContent = t.size;
      document.getElementById('color-btn').textContent = t.color;
      document.getElementById('font-btn').textContent = t.font;
      document.getElementById('position-btn').textContent = t.position;
      document.getElementById('bg-btn').textContent = t.bg;
    }
  
    function updateClock() {
      const now = new Date();
      const time = now.toLocaleTimeString(currentLang === 'et' ? 'et-EE' : 'en-GB', {
        hour12: !is24h
      });
      clockEl.textContent = time;
  
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      const dateStr = now.toLocaleDateString(currentLang === 'et' ? 'et-EE' : 'en-GB', options);
      dateEl.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    }
  
    setInterval(updateClock, 1000);
    updateClock();
    updateLabels();

    settingsToggle.addEventListener('click', () => {
      const visible = settingsPanel.style.display === 'flex';
      settingsPanel.style.display = visible ? 'none' : 'flex';
    });
  
    document.getElementById('font-size-btn').addEventListener('click', () => {
      currentSize = (currentSize + 1) % fontSizes.length;
      const size = fontSizes[currentSize];
      clockEl.style.fontSize = size;
      dateEl.style.fontSize = `calc(${size} * 0.35)`;
    });
  
    document.getElementById('color-btn').addEventListener('click', () => {
      currentColor = (currentColor + 1) % colors.length;
      clockEl.style.color = colors[currentColor];
      dateEl.style.color = colors[currentColor];
    });
  
    document.getElementById('font-btn').addEventListener('click', () => {
      currentFont = (currentFont + 1) % fonts.length;
      clockContainer.style.fontFamily = fonts[currentFont];
    });
  
    document.getElementById('position-btn').addEventListener('click', () => {
      currentPosition = (currentPosition + 1) % positions.length;
      clockContainer.style.justifyContent = positions[currentPosition];
    });
  
    document.getElementById('format-select').addEventListener('change', (e) => {
      is24h = e.target.value === '24';
      updateClock();
    });
  
    document.getElementById('lang-select').addEventListener('change', (e) => {
      currentLang = e.target.value;
      updateClock();
      updateLabels();
    });
  
    
    document.getElementById('bg-btn').addEventListener('click', () => {
      if (typeof changeBackground === 'function') {
        changeBackground();
      }
    });
  });
  