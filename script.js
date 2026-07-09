//Lista de espiritus
const spiritsDatabase = [
    // 1. Espíritu de agua - agua
    { id: 1, name: "Espíritu de agua", img: "img/agua.png" },
    { id: 2, name: "Espíritu de agua Dorado", img: "img/agua-dorado.png" },
    { id: 3, name: "Espíritu de agua Galaxy", img: "img/agua-galaxy.png" },
    { id: 4, name: "Espíritu de agua Gomita", img: "img/agua-gomita.png" },
    { id: 5, name: "Espíritu de agua Holográfico", img: "img/agua-holografico.png" }, // <--- NUEVO

    // 2. Espíritu de tierra - bosque
    { id: 6, name: "Espíritu de tierra", img: "img/bosque.png" },
    { id: 7, name: "Espíritu de tierra Dorado", img: "img/bosque-dorado.png" },
    { id: 8, name: "Espíritu de tierra Galaxy", img: "img/bosque-galaxy.png" },
    { id: 9, name: "Espíritu de tierra Gomita", img: "img/bosque-gomita.png" },

    // 3. Espíritu de fuego - fuego
    { id: 10, name: "Espíritu de fuego", img: "img/fuego.png" },
    { id: 11, name: "Espíritu de fuego Dorado", img: "img/fuego-dorado.png" },
    { id: 12, name: "Espíritu de fuego Galaxy", img: "img/fuego-galaxy.png" },
    { id: 13, name: "Espíritu de fuego Gomita", img: "img/fuego-gomita.png" },
    { id: 14, name: "Espíritu de fuego Holográfico", img: "img/fuego-holografico.png" }, // <--- NUEVO

    // 4. Espíritu de patito - pato
    { id: 15, name: "Espíritu de patito", img: "img/pato.png" },
    { id: 16, name: "Espíritu de patito Dorado", img: "img/pato-dorado.png" },
    { id: 17, name: "Espíritu de patito Galaxy", img: "img/pato-galaxy.png" },
    { id: 18, name: "Espíritu de patito Gomita", img: "img/pato-gomita.png" },

    // 5. Espíritu fantasma - fantasma
    { id: 19, name: "Espíritu fantasma", img: "img/fantasma.png" },
    { id: 20, name: "Espíritu fantasma Dorado", img: "img/fantasma-dorado.png" },
    { id: 21, name: "Espíritu fantasma Galaxy", img: "img/fantasma-galaxy.png" },
    { id: 22, name: "Espíritu fantasma Gomita", img: "img/fantasma-gomita.png" },
    { id: 23, name: "Espíritu fantasma Holográfico", img: "img/fantasma-holografico.png" }, // <--- NUEVO

    // 6. Espíritu dormilón - almoada
    { id: 24, name: "Espíritu dormilón", img: "img/almoada.png" },
    { id: 25, name: "Espíritu dormilón Dorado", img: "img/almoada-dorado.png" },
    { id: 26, name: "Espíritu dormilón Galaxy", img: "img/almoada-galaxy.png" },
    { id: 27, name: "Espíritu dormilón Gomita", img: "img/almoada-gomita.png" },

    // 7. Espíritu demoníaco - demonio
    { id: 28, name: "Espíritu demoníaco", img: "img/demonio.png" },
    { id: 29, name: "Espíritu demoníaco Dorado", img: "img/demonio-dorado.png" },
    { id: 30, name: "Espíritu demoníaco Galaxy", img: "img/demonio-galaxy.png" },
    { id: 31, name: "Espíritu demoníaco Gomita", img: "img/demonio-gomita.png" },

    // 8. Espíritu punk - punk
    { id: 32, name: "Espíritu punk", img: "img/punk.png" },
    { id: 33, name: "Espíritu punk Dorado", img: "img/punk-dorado.png" },
    { id: 34, name: "Espíritu punk Galaxy", img: "img/punk-galaxy.png" },
    { id: 35, name: "Espíritu punk Gomita", img: "img/punk-gomita.png" },

    // 9. Espíritu monarca - rey
    { id: 36, name: "Espíritu monarca", img: "img/rey.png" },
    { id: 37, name: "Espíritu monarca Dorado", img: "img/rey-dorado.png" },
    { id: 38, name: "Espíritu monarca Galaxy", img: "img/rey-galaxy.png" },
    { id: 39, name: "Espíritu monarca Gomita", img: "img/rey-gomita.png" },
    { id: 40, name: "Espíritu monarca Holográfico", img: "img/rey-holografico.png" }, // <--- NUEVO

    // 10. Espíritu punto cero - zero
    { id: 41, name: "Espíritu punto cero", img: "img/zero.png" },
    { id: 42, name: "Espíritu punto cero Dorado", img: "img/zero-dorado.png" },
    { id: 43, name: "Espíritu punto cero Galaxy", img: "img/zero-galaxy.png" },
    { id: 44, name: "Espíritu punto cero Gomita", img: "img/zero-gomita.png" },

    // 11. Espíritu pez - pez
    { id: 45, name: "Espíritu pez", img: "img/pez.png" },
    { id: 46, name: "Espíritu pez Dorado", img: "img/pez-dorado.png" },
    { id: 47, name: "Espíritu pez Galaxy", img: "img/pez-galaxy.png" },
    { id: 48, name: "Espíritu pez Gomita", img: "img/pez-gomita.png" },

    // 12. Espíritu goleador - fut
    { id: 49, name: "Espíritu goleador", img: "img/fut.png" },
    { id: 50, name: "Espíritu goleador Dorado", img: "img/fut-dorado.png" },
    { id: 51, name: "Espíritu goleador Galaxy", img: "img/fut-galaxy.png" },
    { id: 52, name: "Espíritu goleador Gomita", img: "img/fut-gomita.png" },
    { id: 53, name: "Espíritu goleador Holográfico", img: "img/fut-holografico.png" }, // <--- NUEVO

    // 13. Espíritu de aura - aura
    { id: 54, name: "Espíritu de aura", img: "img/aura.png" },
    { id: 55, name: "Espíritu de aura Dorado", img: "img/aura-dorado.png" },
    { id: 56, name: "Espíritu de aura Galaxy", img: "img/aura-galaxy.png" },
    { id: 57, name: "Espíritu de aura Gomita", img: "img/aura-gomita.png" },

    // 14. Espíritu jefe - boss
    { id: 58, name: "Espíritu jefe", img: "img/boss.png" },
    { id: 59, name: "Espíritu jefe Dorado", img: "img/boss-dorado.png" },
    { id: 60, name: "Espíritu jefe Galaxy", img: "img/boss-galaxy.png" },
    { id: 61, name: "Espíritu jefe Gomita", img: "img/boss-gomita.png" },

    // 15. Espíritu siniestro - parka
    { id: 62, name: "Espíritu siniestro", img: "img/parka.png" },
    { id: 63, name: "Espíritu siniestro Dorado", img: "img/parka-dorado.png" },
    { id: 64, name: "Espíritu siniestro Galaxy", img: "img/parka-galaxy.png" },
    { id: 65, name: "Espíritu siniestro Gomita", img: "img/parka-gomita.png" },

    // 16. Espíritu de cacahuate - cacahuate
    { id: 66, name: "Espíritu de cacahuate", img: "img/cacahuate.png" }
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
    
    // Hacemos el lienzo más grande para que los sprites se distingan bien
    canvas.width = 660;
    canvas.height = 710;
    
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
    ctx.font = 'bold 28px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('FORTNITE SPIRITS TRACKER', canvas.width / 2, 50);

    // Progreso
    const capturedCount = document.querySelectorAll('.spirit-card.captured').length;
    const totalCount = spiritsDatabase.length;
    const percentage = Math.round((capturedCount / totalCount) * 100);

    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 22px "Segoe UI", sans-serif';
    ctx.fillText(`Progreso: ${capturedCount} / ${totalCount} (${percentage}%)`, canvas.width / 2, 90);

    // Cuadrícula con imágenes reales (Sprites)
    const cols = 10;
    const size = 46; // Subimos a 46 píxeles por cuadrito
    const gap = 12;

    const totalGridWidth = cols * size + (cols - 1) * gap;
    const startX = (canvas.width - totalGridWidth) / 2;
    const startY = 130;

    const cards = document.querySelectorAll('.spirit-card');

    cards.forEach((card, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const x = startX + col * (size + gap);
        const y = startY + row * (size + gap);

        // Magia: Extraemos el elemento <img> de adentro de la tarjeta del HTML
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
            
            // 3. ¡OJO! Reseteamos el filtro para no arruinar el siguiente dibujo
            ctx.filter = 'none';

            // 4. Borde rojo de advertencia (faltante)
            ctx.strokeStyle = '#ff3333';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, size, size);
        }
    });
    
    

    // Marca de agua en el pie +QR
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '16px "Segoe UI", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📱 Escanea el código para crear tu', 40, 565);
    ctx.fillText('propia checklist interactiva:', 40, 588);
    
    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 15px "Segoe UI", sans-serif';
    ctx.fillText('ichi9243.github.io/Fortnite-tracker/', 40, 610);

    // 2. Generamos el QR en la memoria usando la librería QRious
    const qr = new QRious({
        value: 'https://ichi9243.github.io/Fortnite-tracker/',
        size: 80,          
        background: 'white', 
        foreground: 'black',
        level: 'M'         
    });

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(535, 535, 88, 88); 
    
    ctx.drawImage(qr.canvas, 539, 539);

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

