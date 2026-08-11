// ==========================================
// LISTA DE ESPÍRITUS (91 EN TOTAL)
// ==========================================
const spiritsDatabase = [
    // 1. Espíritu de agua - agua
    { id: 1, name: "Espíritu de agua", img: "img/agua.png" },
    { id: 2, name: "Espíritu de agua Dorado", img: "img/agua-dorado.png" },
    { id: 3, name: "Espíritu de agua Galaxy", img: "img/agua-galaxy.png" },
    { id: 4, name: "Espíritu de agua Gomita", img: "img/agua-gomita.png" },
    { id: 5, name: "Espíritu de agua Holográfico", img: "img/agua-holografico.png" },
    { id: 6, name: "Espíritu de agua Quack", img: "img/agua-quack.png" },
    { id: 7, name: "Espíritu de agua Gema", img: "img/agua-gema.png" }, // <--- NUEVO

    // 2. Espíritu de tierra - bosque
    { id: 8, name: "Espíritu de tierra", img: "img/bosque.png" },
    { id: 9, name: "Espíritu de tierra Dorado", img: "img/bosque-dorado.png" },
    { id: 10, name: "Espíritu de tierra Galaxy", img: "img/bosque-galaxy.png" },
    { id: 11, name: "Espíritu de tierra Gomita", img: "img/bosque-gomita.png" },
    { id: 12, name: "Espíritu de tierra Cubo", img: "img/bosque-cubo.png" },
    { id: 13, name: "Espíritu de tierra Quack", img: "img/bosque-quack.png" },
    { id: 14, name: "Espíritu de tierra Gema", img: "img/bosque-gema.png" }, // <--- NUEVO

    // 3. Espíritu de fuego - fuego
    { id: 15, name: "Espíritu de fuego", img: "img/fuego.png" },
    { id: 16, name: "Espíritu de fuego Dorado", img: "img/fuego-dorado.png" },
    { id: 17, name: "Espíritu de fuego Galaxy", img: "img/fuego-galaxy.png" },
    { id: 18, name: "Espíritu de fuego Gomita", img: "img/fuego-gomita.png" },
    { id: 19, name: "Espíritu de fuego Holográfico", img: "img/fuego-holografico.png" },
    { id: 20, name: "Espíritu de fuego Cubo", img: "img/fuego-cubo.png" },
    { id: 21, name: "Espíritu de fuego Quack", img: "img/fuego-quack.png" },

    // 4. Espíritu de aire - aire
    { id: 22, name: "Espíritu de aire", img: "img/aire.png" },
    { id: 23, name: "Espíritu de aire Dorado", img: "img/aire-dorado.png" },
    { id: 24, name: "Espíritu de aire Galaxy", img: "img/aire-galaxy.png" },
    { id: 25, name: "Espíritu de aire Gomita", img: "img/aire-gomita.png" },
    { id: 26, name: "Espíritu de aire Holográfico", img: "img/aire-holografico.png" },

    // 5. Espíritu de patito - pato
    { id: 27, name: "Espíritu de patito", img: "img/pato.png" },
    { id: 28, name: "Espíritu de patito Dorado", img: "img/pato-dorado.png" },
    { id: 29, name: "Espíritu de patito Galaxy", img: "img/pato-galaxy.png" },
    { id: 30, name: "Espíritu de patito Gomita", img: "img/pato-gomita.png" },
    { id: 31, name: "Espíritu de patito Gema", img: "img/pato-gema.png" }, // <--- NUEVO

    // 6. Espíritu fantasma - fantasma
    { id: 32, name: "Espíritu fantasma", img: "img/fantasma.png" },
    { id: 33, name: "Espíritu fantasma Dorado", img: "img/fantasma-dorado.png" },
    { id: 34, name: "Espíritu fantasma Galaxy", img: "img/fantasma-galaxy.png" },
    { id: 35, name: "Espíritu fantasma Gomita", img: "img/fantasma-gomita.png" },
    { id: 36, name: "Espíritu fantasma Holográfico", img: "img/fantasma-holografico.png" },

    // 7. Espíritu dormilón - almoada
    { id: 37, name: "Espíritu dormilón", img: "img/almoada.png" },
    { id: 38, name: "Espíritu dormilón Dorado", img: "img/almoada-dorado.png" },
    { id: 39, name: "Espíritu dormilón Galaxy", img: "img/almoada-galaxy.png" },
    { id: 40, name: "Espíritu dormilón Gomita", img: "img/almoada-gomita.png" },
    { id: 41, name: "Espíritu dormilón Cubo", img: "img/almoada-cubo.png" },

    // 8. Espíritu demoníaco - demonio
    { id: 42, name: "Espíritu demoníaco", img: "img/demonio.png" },
    { id: 43, name: "Espíritu demoníaco Dorado", img: "img/demonio-dorado.png" },
    { id: 44, name: "Espíritu demoníaco Galaxy", img: "img/demonio-galaxy.png" },
    { id: 45, name: "Espíritu demoníaco Gomita", img: "img/demonio-gomita.png" },
    { id: 46, name: "Espíritu demoníaco Gema", img: "img/demonio-gema.png" }, // <--- NUEVO

    // 9. Espíritu punk - punk
    { id: 47, name: "Espíritu punk", img: "img/punk.png" },
    { id: 48, name: "Espíritu punk Dorado", img: "img/punk-dorado.png" },
    { id: 49, name: "Espíritu punk Galaxy", img: "img/punk-galaxy.png" },
    { id: 50, name: "Espíritu punk Gomita", img: "img/punk-gomita.png" },
    { id: 51, name: "Espíritu punk Cubo", img: "img/punk-cubo.png" },
    

    // 10. Espíritu monarca - rey
    { id: 53, name: "Espíritu monarca", img: "img/rey.png" },
    { id: 54, name: "Espíritu monarca Dorado", img: "img/rey-dorado.png" },
    { id: 55, name: "Espíritu monarca Galaxy", img: "img/rey-galaxy.png" },
    { id: 56, name: "Espíritu monarca Gomita", img: "img/rey-gomita.png" },
    { id: 57, name: "Espíritu monarca Holográfico", img: "img/rey-holografico.png" },

    // 11. Espíritu punto cero - zero
    { id: 58, name: "Espíritu punto cero", img: "img/zero.png" },
    { id: 59, name: "Espíritu punto cero Dorado", img: "img/zero-dorado.png" },
    { id: 60, name: "Espíritu punto cero Galaxy", img: "img/zero-galaxy.png" },
    { id: 61, name: "Espíritu punto cero Gomita", img: "img/zero-gomita.png" },
    { id: 62, name: "Espíritu punto cero Holográfico", img: "img/zero-holografico.png" }, 
    { id: 63, name: "Espíritu punto cero Cubo", img: "img/zero-cubo.png" }, 
    { id: 64, name: "Espíritu punto cero Quack", img: "img/zero-quack.png" },
    { id: 65, name: "Espíritu punto cero Gema", img: "img/zero-gema.png" }, // <--- NUEVO

    // 12. Espíritu pez - pez
    { id: 66, name: "Espíritu pez", img: "img/pez.png" },
    { id: 67, name: "Espíritu pez Dorado", img: "img/pez-dorado.png" },
    { id: 68, name: "Espíritu pez Galaxy", img: "img/pez-galaxy.png" },
    { id: 69, name: "Espíritu pez Gomita", img: "img/pez-gomita.png" },
    { id: 70, name: "Espíritu pez Cubo", img: "img/pez-cubo.png" },

    // 13. Espíritu goleador - fut
    { id: 71, name: "Espíritu goleador", img: "img/fut.png" },
    { id: 72, name: "Espíritu goleador Dorado", img: "img/fut-dorado.png" },
    { id: 73, name: "Espíritu goleador Galaxy", img: "img/fut-galaxy.png" },
    { id: 74, name: "Espíritu goleador Gomita", img: "img/fut-gomita.png" },
    { id: 75, name: "Espíritu goleador Holográfico", img: "img/fut-holografico.png" },

    // 14. Espíritu de aura - aura
    { id: 76, name: "Espíritu de aura", img: "img/aura.png" },
    { id: 77, name: "Espíritu de aura Dorado", img: "img/aura-dorado.png" },
    { id: 78, name: "Espíritu de aura Galaxy", img: "img/aura-galaxy.png" },
    { id: 79, name: "Espíritu de aura Gomita", img: "img/aura-gomita.png" },
    { id: 80, name: "Espíritu de aura Gema", img: "img/aura-gema.png" }, // <--- NUEVO

    // 15. Espíritu jefe - boss
    { id: 81, name: "Espíritu jefe", img: "img/boss.png" },
    { id: 82, name: "Espíritu jefe Dorado", img: "img/boss-dorado.png" },
    { id: 83, name: "Espíritu jefe Galaxy", img: "img/boss-galaxy.png" },
    { id: 84, name: "Espíritu jefe Gomita", img: "img/boss-gomita.png" },
    { id: 85, name: "Espíritu jefe Cubo", img: "img/boss-cubo.png" },

    // 16. Espíritu siniestro - parka
    { id: 86, name: "Espíritu siniestro", img: "img/parka.png" },
    { id: 87, name: "Espíritu siniestro Dorado", img: "img/parka-dorado.png" },
    { id: 88, name: "Espíritu siniestro Galaxy", img: "img/parka-galaxy.png" },
    { id: 89, name: "Espíritu siniestro Gomita", img: "img/parka-gomita.png" },
    { id: 90, name: "Espíritu siniestro Holográfico", img: "img/parka-holografico.png" }, 
    { id: 91, name: "Espíritu siniestro Cubo", img: "img/parka-cubo.png" }, 
    { id: 92, name: "Espíritu siniestro Gema", img: "img/parka-gema.png" }, // <--- NUEVO

    // 17. Espíritu Batman - Batman
    { id: 93, name: "Espíritu Batman", img: "img/Batman.png" },
    { id: 94, name: "Espíritu Batman Dorado", img: "img/Batman-dorado.png" },
    { id: 95, name: "Espíritu Batman Galaxy", img: "img/Batman-galaxy.png" },
    { id: 96, name: "Espíritu Batman Gomita", img: "img/Batman-gomita.png" },
    { id: 97, name: "Espíritu Batman Holográfico", img: "img/Batman-holografico.png" },
    { id: 98, name: "Espíritu Batman Punto Cero", img: "img/Batman-punto-cero.png" },

    // 18. Espíritu Seven - seven
    { id: 99, name: "Espíritu Seven", img: "img/seven.png" },
    { id: 100, name: "Espíritu Seven Dorado", img: "img/seven-dorado.png" },
    { id: 101, name: "Espíritu Seven Galaxy", img: "img/seven-galaxy.png" },
    { id: 102, name: "Espíritu Seven Gomita", img: "img/seven-gomita.png" },
    { id: 103, name: "Espíritu Seven Holográfico", img: "img/seven-holografico.png" },

    // 19. Espíritu Llama - llama 
    { id: 104, name: "Espíritu Llama", img: "img/llama.png" },
    { id: 105, name: "Espíritu Llama Dorado", img: "img/llama-dorado.png" },
    { id: 106, name: "Espíritu Llama Galaxy", img: "img/llama-galaxy.png" },
    { id: 107, name: "Espíritu Llama Gomita", img: "img/llama-gomita.png" },
    { id: 108, name: "Espíritu Llama Gema", img: "img/llama-gema.png" },

    // 20. Espíritu Peely - peely 
    { id: 109, name: "Espíritu Peely", img: "img/peely.png" },
    { id: 110, name: "Espíritu Peely Dorado", img: "img/peely-dorado.png" },
    { id: 111, name: "Espíritu Peely Galaxy", img: "img/peely-galaxy.png" },
    { id: 112, name: "Espíritu Peely Gomita", img: "img/peely-gomita.png" },
    { id: 113, name: "Espíritu Peely Holográfico", img: "img/peely-holografico.png" },

    // 21. Solitarios / Sin familia
    { id: 114, name: "Espíritu de cacahuate", img: "img/cacahuate.png" },
    { id: 115, name: "Espíritu de pollo", img: "img/pollo.png" },
    { id: 116, name: "Espíritu Vini Jr.", img: "img/vini-jr.png" },
    { id: 117, name: "Espíritu John Wick", img: "img/john-wick.png" },
    { id: 118, name: "Espiritu de Ironmouse", img: "img/ironmouse.png" } 
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
    canvas.height = 1660;
    
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
    ctx.fillText('📱 Escanea el código para crear tu', 560, 1520);
    ctx.fillText('propia checklist interactiva:', 570, 1550);
    
    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 25px "Segoe UI", sans-serif';
    ctx.fillText('ichi9243.github.io/Fortnite-tracker/', 570, 1590);

    const qr = new QRious({
        value: 'https://ichi9243.github.io/Fortnite-tracker/',
        size: 130,          
        background: 'white', 
        foreground: 'black',
        level: 'M'         
    });

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(1060, 1480, 140, 140); 
    ctx.drawImage(qr.canvas, 1065, 1485);

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