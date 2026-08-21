// ==========================================
// LISTA DE ESPÍRITUS (33 EN TOTAL)
// ==========================================
const spiritsDatabase = [
    // 1. Tails
    { id: 1, name: "Espíritu Tails", img: "img/tails.webp" },
    { id: 2, name: "Espíritu Tails Dorado", img: "img/tails-dorado.webp" },
    { id: 3, name: "Espíritu Tails Hacker", img: "img/tails-hacker.webp" },

    // 2. Sonic
    { id: 4, name: "Espíritu Sonic", img: "img/sonic.webp" },
    { id: 5, name: "Espíritu Sonic Dorado", img: "img/sonic-dorado.webp" },
    { id: 6, name: "Espíritu Sonic Hacker", img: "img/sonic-hacker.webp" },

    // 3. Shadow
    { id: 7, name: "Espíritu Shadow", img: "img/shadow.webp" },
    { id: 8, name: "Espíritu Shadow Dorado", img: "img/shadow-dorado.webp" },
    { id: 9, name: "Espíritu Shadow Hacker", img: "img/shadow-hacker.webp" },

    // 4. Klombo
    { id: 10, name: "Espíritu Klombo", img: "img/klombo.webp" },
    { id: 11, name: "Espíritu Klombo Dorado", img: "img/klombo-dorado.webp" },
    { id: 12, name: "Espíritu Klombo Hacker", img: "img/klombo-hacker.webp" },

    // 5. Killswitch
    { id: 13, name: "Espíritu Killswitch", img: "img/killswitch.webp" },
    { id: 14, name: "Espíritu Killswitch Dorado", img: "img/killswitch-dorado.webp" },
    { id: 15, name: "Espíritu Killswitch Hacker", img: "img/killswitch-hacker.webp" },

    // 6. Jonesy
    { id: 16, name: "Espíritu Jonesy", img: "img/jonesy.webp" },
    { id: 17, name: "Espíritu Jonesy Dorado", img: "img/jonesy-dorado.webp" },
    { id: 18, name: "Espíritu Jonesy Hacker", img: "img/jonesy-hacker.webp" },

    // 7. Jackrabbit
    { id: 19, name: "Espíritu Jackrabbit", img: "img/jackrabbit.webp" },
    { id: 20, name: "Espíritu Jackrabbit Dorado", img: "img/jackrabbit-dorado.webp" },
    { id: 21, name: "Espíritu Jackrabbit Hacker", img: "img/jackrabbit-hacker.webp" },

    // 8. Corona (El espíritu)
    { id: 22, name: "Espíritu Corona", img: "img/corona.webp" },
    { id: 23, name: "Espíritu Corona Dorado", img: "img/corona-dorado.webp" },
    { id: 24, name: "Espíritu Corona Hacker", img: "img/corona-hacker.webp" },

    // 9. Aventura
    { id: 25, name: "Espíritu Aventura", img: "img/aventura.webp" },
    { id: 26, name: "Espíritu Aventura Dorado", img: "img/aventura-dorado.webp" },
    { id: 27, name: "Espíritu Aventura Hacker", img: "img/aventura-hacker.webp" },

    // 10. Arbusto
    { id: 28, name: "Espíritu Arbusto", img: "img/arbusto.webp" },
    { id: 29, name: "Espíritu Arbusto Dorado", img: "img/arbusto-dorado.webp" },
    { id: 30, name: "Espíritu Arbusto Hacker", img: "img/arbusto-hacker.webp" },

    // 11. 8bits
    { id: 31, name: "Espíritu 8bits", img: "img/8bits.webp" },
    { id: 32, name: "Espíritu 8bits Dorado", img: "img/8bits-dorado.webp" },
    { id: 33, name: "Espíritu 8bits Hacker", img: "img/8bits-hacker.webp" }
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
    canvas.height = 900;
    
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
    ctx.fillText('📱 Escanea el código para crear tu', 560, 760);
    ctx.fillText('propia checklist interactiva:', 570, 790);
    
    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 25px "Segoe UI", sans-serif';
    ctx.fillText('ichi9243.github.io/Fortnite-tracker/', 570, 830);

    const qr = new QRious({
        value: 'https://ichi9243.github.io/Fortnite-tracker/',
        size: 130,          
        background: 'white', 
        foreground: 'black',
        level: 'M'         
    });

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(1060, 720, 140, 140); 
    ctx.drawImage(qr.canvas, 1065, 725);

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