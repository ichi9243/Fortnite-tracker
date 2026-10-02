// ==========================================
// LISTA DE ESPÍRITUS (33 EN TOTAL)
// ==========================================
const spiritsDatabase = [
    // 1. Tails
    { id: 1, name: "Espíritu Tails", img: "img/tails.webp" },
    { id: 2, name: "Espíritu Tails Dorado", img: "img/tails-dorado.webp" },
    { id: 3, name: "Espíritu Tails Hacker", img: "img/tails-hacker.webp" },
    { id: 4, name: "Espíritu Tails Bounty", img: "img/tails_bounty.webp" },
    { id: 5, name: "Espíritu Tails Loot", img: "img/tails_loot.webp" },

    // 2. Sonic
    { id: 6, name: "Espíritu Sonic", img: "img/sonic.webp" },
    { id: 7, name: "Espíritu Sonic Dorado", img: "img/sonic-dorado.webp" },
    { id: 8, name: "Espíritu Sonic Hacker", img: "img/sonic-hacker.webp" },
    { id: 9, name: "Espíritu Sonic Bounty", img: "img/sonic_bounty.webp" },
    { id: 10, name: "Espíritu Sonic Loot", img: "img/sonic_loot.webp" },

    // 3. Shadow
    { id: 11, name: "Espíritu Shadow", img: "img/shadow.webp" },
    { id: 12, name: "Espíritu Shadow Dorado", img: "img/shadow-dorado.webp" },
    { id: 13, name: "Espíritu Shadow Hacker", img: "img/shadow-hacker.webp" },
    { id: 14, name: "Espíritu Shadow Bounty", img: "img/shadow_bounty.webp" },
    { id: 15, name: "Espíritu Shadow Loot", img: "img/shadow_loot.webp" },

    // 4. Klombo
    { id: 16, name: "Espíritu Klombo", img: "img/klombo.webp" },
    { id: 17, name: "Espíritu Klombo Dorado", img: "img/klombo-dorado.webp" },
    { id: 18, name: "Espíritu Klombo Hacker", img: "img/klombo-hacker.webp" },
    { id: 19, name: "Espíritu Klombo Bounty", img: "img/klombo_bounty.webp" },
    { id: 20, name: "Espíritu Klombo Loot", img: "img/klombo_loot.webp" },

    // 5. Killswitch
    { id: 21, name: "Espíritu Killswitch", img: "img/killswitch.webp" },
    { id: 22, name: "Espíritu Killswitch Dorado", img: "img/killswitch-dorado.webp" },
    { id: 23, name: "Espíritu Killswitch Hacker", img: "img/killswitch-hacker.webp" },
    { id: 24, name: "Espíritu Killswitch Bounty", img: "img/killswitch_bounty.webp" },
    { id: 25, name: "Espíritu Killswitch Loot", img: "img/killswitch_loot.webp" },

    // 6. Jonesy
    { id: 26, name: "Espíritu Jonesy", img: "img/jonesy.webp" },
    { id: 27, name: "Espíritu Jonesy Dorado", img: "img/jonesy-dorado.webp" },
    { id: 28, name: "Espíritu Jonesy Hacker", img: "img/jonesy-hacker.webp" },
    { id: 29, name: "Espíritu Jonesy Bounty", img: "img/jonesy_bounty.webp" },
    { id: 30, name: "Espíritu Jonesy Loot", img: "img/jonesy_loot.webp" },

    // 7. Jackrabbit
    { id: 31, name: "Espíritu Jackrabbit", img: "img/jackrabbit.webp" },
    { id: 32, name: "Espíritu Jackrabbit Dorado", img: "img/jackrabbit-dorado.webp" },
    { id: 33, name: "Espíritu Jackrabbit Hacker", img: "img/jackrabbit-hacker.webp" },
    { id: 34, name: "Espíritu Jackrabbit Bounty", img: "img/jackrabbit_bounty.webp" },
    { id: 35, name: "Espíritu Jackrabbit Loot", img: "img/jackrabbit_loot.webp" },

    // 8. Corona
    { id: 36, name: "Espíritu Corona", img: "img/corona.webp" },
    { id: 37, name: "Espíritu Corona Dorado", img: "img/corona-dorado.webp" },
    { id: 38, name: "Espíritu Corona Hacker", img: "img/corona-hacker.webp" },
    { id: 39, name: "Espíritu Corona Bounty", img: "img/corona_bounty.webp" },
    { id: 40, name: "Espíritu Corona Loot", img: "img/corona_loot.webp" },

    // 9. Aventura
    { id: 41, name: "Espíritu Aventura", img: "img/aventura.webp" },
    { id: 42, name: "Espíritu Aventura Dorado", img: "img/aventura-dorado.webp" },
    { id: 43, name: "Espíritu Aventura Hacker", img: "img/aventura-hacker.webp" },
    { id: 44, name: "Espíritu Aventura Bounty", img: "img/aventura_bounty.webp" },
    { id: 45, name: "Espíritu Aventura Loot", img: "img/aventura_loot.webp" },

    // 10. Arbusto
    { id: 46, name: "Espíritu Arbusto", img: "img/arbusto.webp" },
    { id: 47, name: "Espíritu Arbusto Dorado", img: "img/arbusto-dorado.webp" },
    { id: 48, name: "Espíritu Arbusto Hacker", img: "img/arbusto-hacker.webp" },
    { id: 49, name: "Espíritu Arbusto Bounty", img: "img/arbusto_bounty.webp" },
    { id: 50, name: "Espíritu Arbusto Loot", img: "img/arbusto_loot.webp" },

    // 11. 8bits
    { id: 51, name: "Espíritu 8bits", img: "img/8bits.webp" },
    { id: 52, name: "Espíritu 8bits Dorado", img: "img/8bits-dorado.webp" },
    { id: 53, name: "Espíritu 8bits Hacker", img: "img/8bits-hacker.webp" },
    { id: 54, name: "Espíritu 8bits Bounty", img: "img/8bits_bounty.webp" },
    { id: 55, name: "Espíritu 8bits Loot", img: "img/8bits_loot.webp" },

    // 12. Tormenta
    { id: 56, name: "Espíritu Tormenta", img: "img/tormenta.webp" },
    { id: 57, name: "Espíritu Tormenta Dorado", img: "img/tormenta-dorado.webp" },
    { id: 58, name: "Espíritu Tormenta Hacker", img: "img/tormenta-hacker.webp" },
    { id: 59, name: "Espíritu Tormenta Bounty", img: "img/tormenta_bounty.webp" },
    { id: 60, name: "Espíritu Tormenta Loot", img: "img/tormenta_loot.webp" },

    // 13. Onigiri
    { id: 61, name: "Espíritu Onigiri", img: "img/onigiri.webp" },
    { id: 62, name: "Espíritu Onigiri Dorado", img: "img/onigiri-dorado.webp" },
    { id: 63, name: "Espíritu Onigiri Hacker", img: "img/onigiri-hacker.webp" },
    { id: 64, name: "Espíritu Onigiri Bounty", img: "img/onigiri_bounty.webp" },
    { id: 65, name: "Espíritu Onigiri Loot", img: "img/onigiri_loot.webp" },

    // 14. Overshield
    { id: 66, name: "Espíritu Overshield", img: "img/overshield.webp" },
    { id: 67, name: "Espíritu Overshield Dorado", img: "img/overshield-dorado.webp" },
    { id: 68, name: "Espíritu Overshield Hacker", img: "img/overshield-hacker.webp" },
    { id: 69, name: "Espíritu Overshield Bounty", img: "img/overshield_bounty.webp" },
    { id: 70, name: "Espíritu Overshield Loot", img: "img/overshield_loot.webp" },

    // 15. X-Ray
    { id: 71, name: "Espíritu X-Ray", img: "img/x-ray.webp" },
    { id: 72, name: "Espíritu X-Ray Dorado", img: "img/x-ray-dorado.webp" },
    { id: 73, name: "Espíritu X-Ray Hacker", img: "img/x-ray-hacker.webp" },
    { id: 74, name: "Espíritu X-Ray Bounty", img: "img/x-ray_bounty.webp" },
    { id: 75, name: "Espíritu X-Ray Loot", img: "img/x-ray_loot.webp" },

    // 16. Birthday (NUEVA)
    { id: 76, name: "Espíritu Birthday", img: "img/birthday.webp" },
    { id: 77, name: "Espíritu Birthday Dorado", img: "img/birthday_dorado.webp" },
    { id: 78, name: "Espíritu Birthday Hacker", img: "img/birthday_hacker.webp" },
    { id: 79, name: "Espíritu Birthday Bounty", img: "img/birthday_bounty.webp" },
    { id: 80, name: "Espíritu Birthday Loot", img: "img/birthday_loot.webp" },

    // 17. Blinky (NUEVA)
    { id: 81, name: "Espíritu Blinky", img: "img/blinky.webp" },
    { id: 82, name: "Espíritu Blinky Dorado", img: "img/blinky_dorado.webp" },
    { id: 83, name: "Espíritu Blinky Hacker", img: "img/blinky_hacker.webp" },
    { id: 84, name: "Espíritu Blinky Bounty", img: "img/blinky_bounty.webp" },
    { id: 85, name: "Espíritu Blinky Loot", img: "img/blinky_loot.webp" },

    // 18. Crash (NUEVA)
    { id: 86, name: "Espíritu Crash", img: "img/crash.webp" },
    { id: 87, name: "Espíritu Crash Dorado", img: "img/crash_dorado.webp" },
    { id: 88, name: "Espíritu Crash Hacker", img: "img/crash_hacker.webp" },
    { id: 89, name: "Espíritu Crash Bounty", img: "img/crash_bounty.webp" },
    { id: 90, name: "Espíritu Crash Loot", img: "img/crash_loot.webp" },

    // 19. Deer (NUEVA)
    { id: 91, name: "Espíritu Deer", img: "img/deer.webp" },
    { id: 92, name: "Espíritu Deer Dorado", img: "img/deer_dorado.webp" },
    { id: 93, name: "Espíritu Deer Hacker", img: "img/deer_hacker.webp" },
    { id: 94, name: "Espíritu Deer Bounty", img: "img/deer_bounty.webp" },
    { id: 95, name: "Espíritu Deer Loot", img: "img/deer_loot.webp" },

    // 20. Dumpster (NUEVA)
    { id: 96, name: "Espíritu Dumpster", img: "img/dumpster.webp" },
    { id: 97, name: "Espíritu Dumpster Dorado", img: "img/dumpster_dorado.webp" },
    { id: 98, name: "Espíritu Dumpster Hacker", img: "img/dumpster_hacker.webp" },
    { id: 99, name: "Espíritu Dumpster Bounty", img: "img/dumpster_bounty.webp" },
    { id: 100, name: "Espíritu Dumpster Loot", img: "img/dumpster_loot.webp" },

    // 21. Morgana (NUEVA)
    { id: 101, name: "Espíritu Morgana", img: "img/morgana.webp" },
    { id: 102, name: "Espíritu Morgana Dorado", img: "img/morgana_dorado.webp" },
    { id: 103, name: "Espíritu Morgana Hacker", img: "img/morgana_hacker.webp" },
    { id: 104, name: "Espíritu Morgana Bounty", img: "img/morgana_bounty.webp" },
    { id: 105, name: "Espíritu Morgana Loot", img: "img/morgana_loot.webp" },

    // 22. Pond (NUEVA)
    { id: 106, name: "Espíritu Pond", img: "img/pond.webp" },
    { id: 107, name: "Espíritu Pond Dorado", img: "img/pond_dorado.webp" },
    { id: 108, name: "Espíritu Pond Hacker", img: "img/pond_hacker.webp" },
    { id: 109, name: "Espíritu Pond Bounty", img: "img/pond_bounty.webp" },
    { id: 110, name: "Espíritu Pond Loot", img: "img/pond_loot.webp" },

    // 23. Spooky (NUEVA)
    { id: 111, name: "Espíritu Spooky", img: "img/spooky.webp" },
    { id: 112, name: "Espíritu Spooky Dorado", img: "img/spooky_dorado.webp" },
    { id: 113, name: "Espíritu Spooky Hacker", img: "img/spooky_hacker.webp" },
    { id: 114, name: "Espíritu Spooky Bounty", img: "img/spooky_bounty.webp" },
    { id: 115, name: "Espíritu Spooky Loot", img: "img/spooky_loot.webp" },

    // 24. Vampire (NUEVA)
    { id: 116, name: "Espíritu Vampire", img: "img/vampire.webp" },
    { id: 117, name: "Espíritu Vampire Dorado", img: "img/vampire_dorado.webp" },
    { id: 118, name: "Espíritu Vampire Hacker", img: "img/vampire_hacker.webp" },
    { id: 119, name: "Espíritu Vampire Bounty", img: "img/vampire_bounty.webp" },
    { id: 120, name: "Espíritu Vampire Loot", img: "img/vampire_loot.webp" },

    // 25. Solitarios / Colabs
    { id: 121, name: "Espíritu Mega Man", img: "img/mega-man.webp" }
];


// ==========================================
// RENDERIZADO DE LA CUADRÍCULA
// ==========================================
const gridContainer = document.getElementById('spirits-grid');

function renderSpirits() {
    gridContainer.innerHTML = '';
    spiritsDatabase.forEach(spirit => {
        const card = document.createElement('div');
        card.classList.add('spirit-card');
        card.dataset.id = spirit.id;
        
        card.innerHTML = `
            <img src="img/corona.png" alt="Dominado" class="spirit-crown">
            <img src="${spirit.img}" alt="${spirit.name}" class="spirit-img">
            <span class="spirit-name">${spirit.name}</span>
        `;
        gridContainer.appendChild(card);
    });
}


// ==========================================
// INTERACCIÓN Y LÓGICA (MÁQUINA DE 3 ESTADOS)
// ==========================================
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const totalSpirits = spiritsDatabase.length;

function updateProgress() {
    const capturedCount = document.querySelectorAll('.spirit-card.captured, .spirit-card.mastered').length;
    const masteredCount = document.querySelectorAll('.spirit-card.mastered').length;
    const percentage = Math.round((capturedCount / totalSpirits) * 100);
    
    progressText.innerText = `Capturados: ${capturedCount}/${totalSpirits} (${percentage}%) | Dominados: ${masteredCount} 👑`;
    progressBar.value = capturedCount;
    progressBar.max = totalSpirits;
}

function setupClickEvents() {
    const cards = document.querySelectorAll('.spirit-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('captured') && !card.classList.contains('mastered')) {
                card.classList.add('captured');
            } else if (card.classList.contains('captured')) {
                card.classList.remove('captured');
                card.classList.add('mastered');
            } else if (card.classList.contains('mastered')) {
                card.classList.remove('mastered');
            }
            
            updateProgress();
            saveProgress();
            applyCurrentFilter(); 
        });
    });
}


// ==========================================
// MEMORIA LOCAL (LOCALSTORAGE DUAL)
// ==========================================
const btnReset = document.getElementById('btn-reset');

function saveProgress() {
    const capturedCards = document.querySelectorAll('.spirit-card.captured');
    const masteredCards = document.querySelectorAll('.spirit-card.mastered');
    
    const capturedIds = Array.from(capturedCards).map(card => card.dataset.id);
    const masteredIds = Array.from(masteredCards).map(card => card.dataset.id);
    
    localStorage.setItem('fortniteCaptured', JSON.stringify(capturedIds));
    localStorage.setItem('fortniteMastered', JSON.stringify(masteredIds));
}

function loadProgress() {
    const saveCaptured = localStorage.getItem('fortniteCaptured');
    const saveMastered = localStorage.getItem('fortniteMastered');
    const oldSave = localStorage.getItem('fortniteSpirits');
    
    let capturedIds = saveCaptured ? JSON.parse(saveCaptured) : (oldSave ? JSON.parse(oldSave) : []);
    let masteredIds = saveMastered ? JSON.parse(saveMastered) : [];
    
    const cards = document.querySelectorAll('.spirit-card');
    cards.forEach(card => {
        if (masteredIds.includes(card.dataset.id)) {
            card.classList.add('mastered');
        } else if (capturedIds.includes(card.dataset.id)) {
            card.classList.add('captured');
        }
    });
}

btnReset.addEventListener('click', () => {
    if (confirm("¿Estás seguro de que quieres borrar todo tu progreso y perder tus coronas? No hay marcha atrás.")) {
        localStorage.removeItem('fortniteCaptured');
        localStorage.removeItem('fortniteMastered');
        localStorage.removeItem('fortniteSpirits');
        
        document.querySelectorAll('.spirit-card').forEach(card => {
            card.classList.remove('captured', 'mastered');
        });
        updateProgress();
    }
});


// ==========================================
// SISTEMA DE 5 FILTROS AVANZADOS
// ==========================================
const btnAll = document.getElementById('btn-all');
const btnCaptured = document.getElementById('btn-captured');
const btnMissing = document.getElementById('btn-missing');
const btnMastered = document.getElementById('btn-mastered');
const btnUnmastered = document.getElementById('btn-unmastered');

let currentFilter = 'all';

function setActiveButton(clickedBtn, filterType) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
    currentFilter = filterType;
    applyCurrentFilter();
}

function applyCurrentFilter() {
    const cards = document.querySelectorAll('.spirit-card');
    cards.forEach(card => {
        const isCaptured = card.classList.contains('captured');
        const isMastered = card.classList.contains('mastered');
        
        switch(currentFilter) {
            case 'all':
                card.classList.remove('hidden');
                break;
            case 'captured':
                if (isCaptured || isMastered) card.classList.remove('hidden');
                else card.classList.add('hidden');
                break;
            case 'missing':
                if (!isCaptured && !isMastered) card.classList.remove('hidden');
                else card.classList.add('hidden');
                break;
            case 'mastered':
                if (isMastered) card.classList.remove('hidden');
                else card.classList.add('hidden');
                break;
            case 'unmastered':
                if (isCaptured && !isMastered) card.classList.remove('hidden');
                else card.classList.add('hidden');
                break;
        }
    });
}

btnAll.addEventListener('click', () => setActiveButton(btnAll, 'all'));
btnCaptured.addEventListener('click', () => setActiveButton(btnCaptured, 'captured'));
btnMissing.addEventListener('click', () => setActiveButton(btnMissing, 'missing'));
btnMastered.addEventListener('click', () => setActiveButton(btnMastered, 'mastered'));
btnUnmastered.addEventListener('click', () => setActiveButton(btnUnmastered, 'unmastered'));


// ==========================================
// GENERADOR DE IMAGEN HD (CANVAS API CON CORONAS)
// ==========================================
const btnShare = document.getElementById('btn-share');
const shareContainer = document.getElementById('share-container');
const sharePreview = document.getElementById('share-preview');
const btnDownload = document.getElementById('btn-download');

btnShare.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 1300;
    canvas.height = 1880;
    
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#3a3a3a');
    gradient.addColorStop(1, '#050505');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#00ffcc';
    ctx.lineWidth = 6;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Títulos
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('FORTNITE SPIRITS TRACKER v2.0', canvas.width / 2, 60);

    // Progreso
    const capturedCount = document.querySelectorAll('.spirit-card.captured, .spirit-card.mastered').length;
    const masteredCount = document.querySelectorAll('.spirit-card.mastered').length;
    const percentage = Math.round((capturedCount / totalSpirits) * 100);

    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 32px "Segoe UI", sans-serif';
    ctx.fillText(`Capturados: ${capturedCount}/${totalSpirits} (${percentage}%) | Dominados: ${masteredCount} 👑`, canvas.width / 2, 115);

    // Cuadrícula
    const cols = 10;
    const size = 92; 
    const gap = 16;
    const totalGridWidth = cols * size + (cols - 1) * gap;
    const startX = (canvas.width - totalGridWidth) / 2;
    const startY = 160;

    const cards = document.querySelectorAll('.spirit-card');

    cards.forEach((card, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const x = startX + col * (size + gap);
        const y = startY + row * (size + gap);

        const imgElement = card.querySelector('.spirit-img');
        const crownElement = card.querySelector('.spirit-crown');

        if (card.classList.contains('mastered')) {
            // 1. ESTADO DOMINADO
            ctx.fillStyle = '#1a180b'; 
            ctx.fillRect(x, y, size, size);
            
            ctx.filter = 'none';
            ctx.drawImage(imgElement, x, y, size, size);

            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 4;
            ctx.strokeRect(x, y, size, size);

            ctx.drawImage(crownElement, x + size - 30, y - 6, 36, 36);

        } else if (card.classList.contains('captured')) {
            // 2. ESTADO CAPTURADO NORMAL
            ctx.fillStyle = '#1e1e1e';
            ctx.fillRect(x, y, size, size);
            
            ctx.filter = 'none';
            ctx.drawImage(imgElement, x, y, size, size);

            ctx.strokeStyle = '#00ffcc';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, size, size);

        } else {
            // 3. ESTADO FALTANTE
            ctx.fillStyle = '#1e1e1e';
            ctx.fillRect(x, y, size, size);

            ctx.filter = 'grayscale(10%) opacity(50%)';
            ctx.drawImage(imgElement, x, y, size, size);
            
            ctx.filter = 'none';
            ctx.strokeStyle = '#ff3333';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, size, size);
        }
    });

    // Pie de página + QR
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '24px "Segoe UI", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📱 Escanea el código para crear tu', 560, 1740);
    ctx.fillText('propia checklist interactiva:', 570, 1770);
    
    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 25px "Segoe UI", sans-serif';
    ctx.fillText('ichi9243.github.io/Fortnite-tracker/', 570, 1810);

    const qr = new QRious({
        value: 'https://ichi9243.github.io/Fortnite-tracker/',
        size: 130,          
        background: 'white', 
        foreground: 'black',
        level: 'M'         
    });

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(1060, 1700, 140, 140); 
    ctx.drawImage(qr.canvas, 1065, 1705);

    const dataUrl = canvas.toDataURL('image/png');
    sharePreview.src = dataUrl;
    btnDownload.href = dataUrl;

    shareContainer.classList.remove('hidden');
    shareContainer.scrollIntoView({ behavior: 'smooth' });
});

// ==========================================
// EJECUCIÓN PRINCIPAL
// ==========================================
renderSpirits();
loadProgress();
setupClickEvents();
updateProgress();