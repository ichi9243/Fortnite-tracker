//Lista de espiritus
const spiritsDatabase = [
    // 1. Espíritu de agua - agua
    { id: 1, name: "Espíritu de agua", img: "img/agua.png" },
    { id: 2, name: "Espíritu de agua Dorado", img: "img/agua-dorado.png" },
    { id: 3, name: "Espíritu de agua Galaxy", img: "img/agua-galaxy.png" },
    { id: 4, name: "Espíritu de agua Gomita", img: "img/agua-gomita.png" },
    { id: 5, name: "Espíritu de agua Holográfico", img: "img/agua-holografico.png" },

    // 2. Espíritu de tierra - bosque
    { id: 6, name: "Espíritu de tierra", img: "img/bosque.png" },
    { id: 7, name: "Espíritu de tierra Dorado", img: "img/bosque-dorado.png" },
    { id: 8, name: "Espíritu de tierra Galaxy", img: "img/bosque-galaxy.png" },
    { id: 9, name: "Espíritu de tierra Gomita", img: "img/bosque-gomita.png" },
    { id: 10, name: "Espíritu de tierra Cubo", img: "img/bosque-cubo.png" }, 

    // 3. Espíritu de fuego - fuego
    { id: 11, name: "Espíritu de fuego", img: "img/fuego.png" },
    { id: 12, name: "Espíritu de fuego Dorado", img: "img/fuego-dorado.png" },
    { id: 13, name: "Espíritu de fuego Galaxy", img: "img/fuego-galaxy.png" },
    { id: 14, name: "Espíritu de fuego Gomita", img: "img/fuego-gomita.png" },
    { id: 15, name: "Espíritu de fuego Holográfico", img: "img/fuego-holografico.png" },
    { id: 16, name: "Espíritu de fuego Cubo", img: "img/fuego-cubo.png" }, 

    // 4. Espíritu de aire - aire
    { id: 17, name: "Espíritu de aire", img: "img/aire.png" },
    { id: 18, name: "Espíritu de aire Dorado", img: "img/aire-dorado.png" },
    { id: 19, name: "Espíritu de aire Galaxy", img: "img/aire-galaxy.png" },
    { id: 20, name: "Espíritu de aire Gomita", img: "img/aire-gomita.png" },
    { id: 21, name: "Espíritu de aire Holográfico", img: "img/aire-holografico.png" },

    // 5. Espíritu de patito - pato
    { id: 22, name: "Espíritu de patito", img: "img/pato.png" },
    { id: 23, name: "Espíritu de patito Dorado", img: "img/pato-dorado.png" },
    { id: 24, name: "Espíritu de patito Galaxy", img: "img/pato-galaxy.png" },
    { id: 25, name: "Espíritu de patito Gomita", img: "img/pato-gomita.png" },

    // 6. Espíritu fantasma - fantasma
    { id: 26, name: "Espíritu fantasma", img: "img/fantasma.png" },
    { id: 27, name: "Espíritu fantasma Dorado", img: "img/fantasma-dorado.png" },
    { id: 28, name: "Espíritu fantasma Galaxy", img: "img/fantasma-galaxy.png" },
    { id: 29, name: "Espíritu fantasma Gomita", img: "img/fantasma-gomita.png" },
    { id: 30, name: "Espíritu fantasma Holográfico", img: "img/fantasma-holografico.png" },

    // 7. Espíritu dormilón - almoada
    { id: 31, name: "Espíritu dormilón", img: "img/almoada.png" },
    { id: 32, name: "Espíritu dormilón Dorado", img: "img/almoada-dorado.png" },
    { id: 33, name: "Espíritu dormilón Galaxy", img: "img/almoada-galaxy.png" },
    { id: 34, name: "Espíritu dormilón Gomita", img: "img/almoada-gomita.png" },
    { id: 35, name: "Espíritu dormilón Cubo", img: "img/almoada-cubo.png" }, 

    // 8. Espíritu demoníaco - demonio
    { id: 36, name: "Espíritu demoníaco", img: "img/demonio.png" },
    { id: 37, name: "Espíritu demoníaco Dorado", img: "img/demonio-dorado.png" },
    { id: 38, name: "Espíritu demoníaco Galaxy", img: "img/demonio-galaxy.png" },
    { id: 39, name: "Espíritu demoníaco Gomita", img: "img/demonio-gomita.png" },

    // 9. Espíritu punk - punk
    { id: 40, name: "Espíritu punk", img: "img/punk.png" },
    { id: 41, name: "Espíritu punk Dorado", img: "img/punk-dorado.png" },
    { id: 42, name: "Espíritu punk Galaxy", img: "img/punk-galaxy.png" },
    { id: 43, name: "Espíritu punk Gomita", img: "img/punk-gomita.png" },
    { id: 44, name: "Espíritu punk Cubo", img: "img/punk-cubo.png" }, 

    // 10. Espíritu monarca - rey
    { id: 45, name: "Espíritu monarca", img: "img/rey.png" },
    { id: 46, name: "Espíritu monarca Dorado", img: "img/rey-dorado.png" },
    { id: 47, name: "Espíritu monarca Galaxy", img: "img/rey-galaxy.png" },
    { id: 48, name: "Espíritu monarca Gomita", img: "img/rey-gomita.png" },
    { id: 49, name: "Espíritu monarca Holográfico", img: "img/rey-holografico.png" },

    // 11. Espíritu punto cero - zero
    { id: 50, name: "Espíritu punto cero", img: "img/zero.png" },
    { id: 51, name: "Espíritu punto cero Dorado", img: "img/zero-dorado.png" },
    { id: 52, name: "Espíritu punto cero Galaxy", img: "img/zero-galaxy.png" },
    { id: 53, name: "Espíritu punto cero Gomita", img: "img/zero-gomita.png" },

    // 12. Espíritu pez - pez
    { id: 54, name: "Espíritu pez", img: "img/pez.png" },
    { id: 55, name: "Espíritu pez Dorado", img: "img/pez-dorado.png" },
    { id: 56, name: "Espíritu pez Galaxy", img: "img/pez-galaxy.png" },
    { id: 57, name: "Espíritu pez Gomita", img: "img/pez-gomita.png" },
    { id: 58, name: "Espíritu pez Cubo", img: "img/pez-cubo.png" }, 

    // 13. Espíritu goleador - fut
    { id: 59, name: "Espíritu goleador", img: "img/fut.png" },
    { id: 60, name: "Espíritu goleador Dorado", img: "img/fut-dorado.png" },
    { id: 61, name: "Espíritu goleador Galaxy", img: "img/fut-galaxy.png" },
    { id: 62, name: "Espíritu goleador Gomita", img: "img/fut-gomita.png" },
    { id: 63, name: "Espíritu goleador Holográfico", img: "img/fut-holografico.png" },

    // 14. Espíritu de aura - aura
    { id: 64, name: "Espíritu de aura", img: "img/aura.png" },
    { id: 65, name: "Espíritu de aura Dorado", img: "img/aura-dorado.png" },
    { id: 66, name: "Espíritu de aura Galaxy", img: "img/aura-galaxy.png" },
    { id: 67, name: "Espíritu de aura Gomita", img: "img/aura-gomita.png" },
    { id: 68, name: "Espíritu de aura Cubo", img: "img/aura-cubo.png" }, 

    // 15. Espíritu jefe - boss
    { id: 69, name: "Espíritu jefe", img: "img/boss.png" },
    { id: 70, name: "Espíritu jefe Dorado", img: "img/boss-dorado.png" },
    { id: 71, name: "Espíritu jefe Galaxy", img: "img/boss-galaxy.png" },
    { id: 72, name: "Espíritu jefe Gomita", img: "img/boss-gomita.png" },
    { id: 73, name: "Espíritu jefe Cubo", img: "img/boss-cubo.png" }, 

    // 16. Espíritu siniestro - parka
    { id: 74, name: "Espíritu siniestro", img: "img/parka.png" },
    { id: 75, name: "Espíritu siniestro Dorado", img: "img/parka-dorado.png" },
    { id: 76, name: "Espíritu siniestro Galaxy", img: "img/parka-galaxy.png" },
    { id: 77, name: "Espíritu siniestro Gomita", img: "img/parka-gomita.png" },

    // 17. Espíritu Batman - Batman
    { id: 78, name: "Espíritu Batman", img: "img/Batman.png" },
    { id: 79, name: "Espíritu Batman Dorado", img: "img/Batman-dorado.png" },
    { id: 80, name: "Espíritu Batman Galaxy", img: "img/Batman-galaxy.png" },
    { id: 81, name: "Espíritu Batman Gomita", img: "img/Batman-gomita.png" },
    { id: 82, name: "Espíritu Batman Holográfico", img: "img/Batman-holografico.png" },
    { id: 83, name: "Espíritu Batman cubo", img: "img/Batman-punto-cero.png" },

    // 18. Espíritu Seven - seven
    { id: 84, name: "Espíritu Seven", img: "img/seven.png" },
    { id: 85, name: "Espíritu Seven Dorado", img: "img/seven-dorado.png" },
    { id: 86, name: "Espíritu Seven Galaxy", img: "img/seven-galaxy.png" },
    { id: 87, name: "Espíritu Seven Gomita", img: "img/seven-gomita.png" },
    { id: 88, name: "Espíritu Seven Holográfico", img: "img/seven-holografico.png" },

    // 19. Solitarios / Sin familia
    { id: 89, name: "Espíritu de cacahuate", img: "img/cacahuate.png" },
    { id: 90, name: "Espíritu de pollo", img: "img/pollo.png" },
    { id: 91, name: "Espíritu Vini Jr.", img: "img/vini-jr.png" }
];

// Renderizar la cuadricula
const gridContainer = document.getElementById('spirits-grid');
function renderSpirits() {
    gridContainer.innerHTML = '';
    spiritsDatabase.forEach(spirit => {
        const card = document.createElement('div');
        card.classList.add('spirit-card');
        card.dataset.id = spirit.id;
        card.innerHTML = `
        <img src="${spirit.img}" alt="${spirit.name}" class="spirit-img">
        <span class="spirit-name">${spirit.name}</span>
        `;

        gridContainer.appendChild(card);
    });
}

// Interacion y logica (Captuturar espiritus)
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const totalSpirits = spiritsDatabase.length;

function updateProgress(){
    const capturedCount = document.querySelectorAll('.spirit-card.captured').length;
    progressText.innerText = `Capturados: ${capturedCount} / ${totalSpirits}`;
    progressBar.value = capturedCount;
    progressBar.max = totalSpirits;
}

function setupClickEvents(){
    const cards = document.querySelectorAll('.spirit-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('captured');
            updateProgress();
            saveProgress();
        });
    });
}

// Memoria a corto plazo (LOCALSTORAGE) 
const btnReset = document.getElementById('btn-reset');
function saveProgress() {
    const capturedCards = document.querySelectorAll('.spirit-card.captured');
    const capturedIds = Array.from(capturedCards).map(card => card.dataset.id);
    localStorage.setItem('fortniteSpirits', JSON.stringify(capturedIds));
}

function loadProgress() {
    const saveData = localStorage.getItem('fortniteSpirits');
    if (saveData) {
        const capturedIds = JSON.parse(saveData);
        const cards = document.querySelectorAll('.spirit-card');
        cards.forEach(card => {
            if (capturedIds.includes(card.dataset.id)) {
                card.classList.add('captured');
            }
        });
    }
}

// El boton rojo (Limpiar progreso)
btnReset.addEventListener('click', () => {
    if (confirm("¿Estas seguro de que quieres borrar todo tu progreso? No hay marcha atras.")) {
        localStorage.removeItem('fortniteSpirits');
        document.querySelectorAll('.spirit-card').forEach(card => {
            card.classList.remove('captured');
        });

        updateProgress();
    }
});

// Los filtros (Ocultar / mostrar)
const btnAll = document.getElementById('btn-all');
const btnCaptured = document.getElementById('btn-captured');
const btnMissing = document.getElementById('btn-missing');

function setActiveButton(clickedBtn) {
    btnAll.classList.remove('active');
    btnCaptured.classList.remove('active');
    btnMissing.classList.remove('active');
    clickedBtn.classList.add('active');
}

// Filtro mostrar todos
btnAll.addEventListener('click', () => {
    setActiveButton(btnAll);
    const cards = document.querySelectorAll('.spirit-card');
    cards.forEach(card => card.classList.remove('hidden'));
});

// Filtro mostrar capturados
btnCaptured.addEventListener('click', () => {
    setActiveButton(btnCaptured);
    const cards = document.querySelectorAll('.spirit-card');
    cards.forEach(card => {
        if (card.classList.contains('captured')) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});

// Filtro mostrar faltantes
btnMissing.addEventListener('click', () => {
    setActiveButton(btnMissing);
    const cards = document.querySelectorAll('.spirit-card');
    cards.forEach(card => {
        if (card.classList.contains('captured')) {
            card.classList.add('hidden');
        } else {
            card.classList.remove('hidden');
        }
    }); 
});


// GENERADOR DE IMAGEN (CANVAS API CON SPRITES)

const btnShare = document.getElementById('btn-share');
const shareContainer = document.getElementById('share-container');
const sharePreview = document.getElementById('share-preview');
const btnDownload = document.getElementById('btn-download');

btnShare.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // tamaño del lienzo
    canvas.width = 1300;
    canvas.height = 1350;
    
    // Fondo oscuro y borde neón
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#3a3a3a');
    gradient.addColorStop(1, '#050505');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#00ffcc';
    ctx.lineWidth = 6;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Títulos principales
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('FORTNITE SPIRITS TRACKER', canvas.width / 2, 60);

    // Progreso
    const capturedCount = document.querySelectorAll('.spirit-card.captured').length;
    const totalCount = spiritsDatabase.length;
    const percentage = Math.round((capturedCount / totalCount) * 100);

    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 32px "Segoe UI", sans-serif';
    ctx.fillText(`Progreso: ${capturedCount} / ${totalCount} (${percentage}%)`, canvas.width / 2, 115);

    // Cuadrícula con imágenes reales (Sprites)
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

        // Extraemos el elemento <img> de adentro de la tarjeta del HTML
        const imgElement = card.querySelector('img');

        if (card.classList.contains('captured')) {
            // 1. Fondo de la celda
            ctx.fillStyle = '#1e1e1e';
            ctx.fillRect(x, y, size, size);
            
            // 2. Pintamos el sprite normal a todo color
            ctx.filter = 'none';
            ctx.drawImage(imgElement, x, y, size, size);

            // 3. Borde verde neón de éxito
            ctx.strokeStyle = '#00ffcc';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, size, size);
        } else {
            // 1. Fondo de la celda
            ctx.fillStyle = '#1e1e1e';
            ctx.fillRect(x, y, size, size);

            // 2. Activamos el filtro gris en el Canvas y pintamos el sprite fantasma
            ctx.filter = 'grayscale(10%) opacity(50%)';
            ctx.drawImage(imgElement, x, y, size, size);
            
            // 3. Reseteamos el filtro para no arruinar el siguiente dibujo
            ctx.filter = 'none';

            // 4. Borde rojo de advertencia (faltante)
            ctx.strokeStyle = '#ff3333';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, size, size);
        }
    });
    
    

    // Marca de agua en el pie +QR
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '24px "Segoe UI", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📱 Escanea el código para crear tu', 560, 1210);
    ctx.fillText('propia checklist interactiva:', 570, 1240);
    
    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 25px "Segoe UI", sans-serif';
    ctx.fillText('ichi9243.github.io/Fortnite-tracker/', 570, 1280);

    // 2. Generamos el QR en la memoria usando la librería QRious
    const qr = new QRious({
        value: 'https://ichi9243.github.io/Fortnite-tracker/',
        size: 130,          
        background: 'white', 
        foreground: 'black',
        level: 'M'         
    });

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(1060, 1170, 140, 140); 
    
    ctx.drawImage(qr.canvas, 1065, 1175);

    // Transformar a PNG real y mostrar en pantalla
    const dataUrl = canvas.toDataURL('image/png');
    sharePreview.src = dataUrl;
    btnDownload.href = dataUrl;

    shareContainer.classList.remove('hidden');
    shareContainer.scrollIntoView({ behavior: 'smooth' });
});



// Ejecucion principal
renderSpirits();
loadProgress();
setupClickEvents();
updateProgress();

