// ==========================================
// LISTA DE ESPÍRITUS (33 EN TOTAL)
// ==========================================
const spiritsDatabase = [
    // 1. Tails
    { id: "tails", name: "Espíritu Tails", img: "img/tails.webp" },
    { id: "tails-dorado", name: "Espíritu Tails Dorado", img: "img/tails-dorado.webp" },
    { id: "tails-hacker", name: "Espíritu Tails Hacker", img: "img/tails-hacker.webp" },
    { id: "tails_bounty", name: "Espíritu Tails Bounty", img: "img/tails_bounty.webp" },
    { id: "tails_loot", name: "Espíritu Tails Loot", img: "img/tails_loot.webp" },
    { id: "tails_trick_or_treat", name: "Espíritu Tails Trick or Treat", img: "img/tails_trick_or_treat.webp" },

    // 2. Sonic
    { id: "sonic", name: "Espíritu Sonic", img: "img/sonic.webp" },
    { id: "sonic-dorado", name: "Espíritu Sonic Dorado", img: "img/sonic-dorado.webp" },
    { id: "sonic-hacker", name: "Espíritu Sonic Hacker", img: "img/sonic-hacker.webp" },
    { id: "sonic_bounty", name: "Espíritu Sonic Bounty", img: "img/sonic_bounty.webp" },
    { id: "sonic_loot", name: "Espíritu Sonic Loot", img: "img/sonic_loot.webp" },
    { id: "sonic_trick_or_treat", name: "Espíritu Sonic Trick or Treat", img: "img/sonic_trick_or_treat.webp" },

    // 3. Shadow
    { id: "shadow", name: "Espíritu Shadow", img: "img/shadow.webp" },
    { id: "shadow-dorado", name: "Espíritu Shadow Dorado", img: "img/shadow-dorado.webp" },
    { id: "shadow-hacker", name: "Espíritu Shadow Hacker", img: "img/shadow-hacker.webp" },
    { id: "shadow_bounty", name: "Espíritu Shadow Bounty", img: "img/shadow_bounty.webp" },
    { id: "shadow_loot", name: "Espíritu Shadow Loot", img: "img/shadow_loot.webp" },
    { id: "shadow_trick_or_treat", name: "Espíritu Shadow Trick or Treat", img: "img/shadow_trick_or_treat.webp" }, 

    // 4. Klombo
    { id: "klombo", name: "Espíritu Klombo", img: "img/klombo.webp" },
    { id: "klombo-dorado", name: "Espíritu Klombo Dorado", img: "img/klombo-dorado.webp" },
    { id: "klombo-hacker", name: "Espíritu Klombo Hacker", img: "img/klombo-hacker.webp" },
    { id: "klombo_bounty", name: "Espíritu Klombo Bounty", img: "img/klombo_bounty.webp" },
    { id: "klombo_loot", name: "Espíritu Klombo Loot", img: "img/klombo_loot.webp" },
    { id: "klombo_quack", name: "Espíritu Klombo Quack", img: "img/klombo_quack.webp" },
    { id: "klombo_trick_or_treat", name: "Espíritu Klombo Trick or Treat", img: "img/klombo_trick_or_treat.webp" },

    // 5. Killswitch
    { id: "killswitch", name: "Espíritu Killswitch", img: "img/killswitch.webp" },
    { id: "killswitch-dorado", name: "Espíritu Killswitch Dorado", img: "img/killswitch-dorado.webp" },
    { id: "killswitch-hacker", name: "Espíritu Killswitch Hacker", img: "img/killswitch-hacker.webp" },
    { id: "killswitch_bounty", name: "Espíritu Killswitch Bounty", img: "img/killswitch_bounty.webp" },
    { id: "killswitch_loot", name: "Espíritu Killswitch Loot", img: "img/killswitch_loot.webp" },
    { id: "killswitch_trick_or_treat", name: "Espíritu Killswitch Trick or Treat", img: "img/killswitch_trick_or_treat.webp" },

    // 6. Jonesy
    { id: "jonesy", name: "Espíritu Jonesy", img: "img/jonesy.webp" },
    { id: "jonesy-dorado", name: "Espíritu Jonesy Dorado", img: "img/jonesy-dorado.webp" },
    { id: "jonesy-hacker", name: "Espíritu Jonesy Hacker", img: "img/jonesy-hacker.webp" },
    { id: "jonesy_bounty", name: "Espíritu Jonesy Bounty", img: "img/jonesy_bounty.webp" },
    { id: "jonesy_loot", name: "Espíritu Jonesy Loot", img: "img/jonesy_loot.webp" },
    { id: "jonesy_quack", name: "Espíritu Jonesy Quack", img: "img/jonesy_quack.webp" },
    { id: "jonesy_trick_or_treat", name: "Espíritu Jonesy Trick or Treat", img: "img/jonesy_trick_or_treat.webp" },

    // 7. Jackrabbit
    { id: "jackrabbit", name: "Espíritu Jackrabbit", img: "img/jackrabbit.webp" },
    { id: "jackrabbit-dorado", name: "Espíritu Jackrabbit Dorado", img: "img/jackrabbit-dorado.webp" },
    { id: "jackrabbit-hacker", name: "Espíritu Jackrabbit Hacker", img: "img/jackrabbit-hacker.webp" },
    { id: "jackrabbit_bounty", name: "Espíritu Jackrabbit Bounty", img: "img/jackrabbit_bounty.webp" },
    { id: "jackrabbit_loot", name: "Espíritu Jackrabbit Loot", img: "img/jackrabbit_loot.webp" },
    { id: "jackrabbit_trick_or_treat", name: "Espíritu Jackrabbit Trick or Treat", img: "img/jackrabbit_trick_or_treat.webp" },

    // 8. Corona
    { id: "corona", name: "Espíritu Corona", img: "img/corona.webp" },
    { id: "corona-dorado", name: "Espíritu Corona Dorado", img: "img/corona-dorado.webp" },
    { id: "corona-hacker", name: "Espíritu Corona Hacker", img: "img/corona-hacker.webp" },
    { id: "corona_bounty", name: "Espíritu Corona Bounty", img: "img/corona_bounty.webp" },
    { id: "corona_loot", name: "Espíritu Corona Loot", img: "img/corona_loot.webp" },
    { id: "corona_trick_or_treat", name: "Espíritu Corona Trick or Treat", img: "img/corona_trick_or_treat.webp" },

    // 9. Aventura
    { id: "aventura", name: "Espíritu Aventura", img: "img/aventura.webp" },
    { id: "aventura-dorado", name: "Espíritu Aventura Dorado", img: "img/aventura-dorado.webp" },
    { id: "aventura-hacker", name: "Espíritu Aventura Hacker", img: "img/aventura-hacker.webp" },
    { id: "aventura_bounty", name: "Espíritu Aventura Bounty", img: "img/aventura_bounty.webp" },
    { id: "aventura_loot", name: "Espíritu Aventura Loot", img: "img/aventura_loot.webp" },
    { id: "aventura_quack", name: "Espíritu Aventura Quack", img: "img/aventura_quack.webp" },
    { id: "aventura_trick_or_treat", name: "Espíritu Aventura Trick or Treat", img: "img/aventura_trick_or_treat.webp" },

    // 10. Arbusto
    { id: "arbusto", name: "Espíritu Arbusto", img: "img/arbusto.webp" },
    { id: "arbusto-dorado", name: "Espíritu Arbusto Dorado", img: "img/arbusto-dorado.webp" },
    { id: "arbusto-hacker", name: "Espíritu Arbusto Hacker", img: "img/arbusto-hacker.webp" },
    { id: "arbusto_bounty", name: "Espíritu Arbusto Bounty", img: "img/arbusto_bounty.webp" },
    { id: "arbusto_loot", name: "Espíritu Arbusto Loot", img: "img/arbusto_loot.webp" },
    { id: "arbusto_quack", name: "Espíritu Arbusto Quack", img: "img/arbusto_quack.webp" },
    { id: "arbusto_trick_or_treat", name: "Espíritu Arbusto Trick or Treat", img: "img/arbusto_trick_or_treat.webp" },

    // 11. 8bits
    { id: "8bits", name: "Espíritu 8bits", img: "img/8bits.webp" },
    { id: "8bits-dorado", name: "Espíritu 8bits Dorado", img: "img/8bits-dorado.webp" },
    { id: "8bits-hacker", name: "Espíritu 8bits Hacker", img: "img/8bits-hacker.webp" },
    { id: "8bits_bounty", name: "Espíritu 8bits Bounty", img: "img/8bits_bounty.webp" },
    { id: "8bits_loot", name: "Espíritu 8bits Loot", img: "img/8bits_loot.webp" },
    { id: "8-bits_trick_or_treat", name: "Espíritu 8bits Trick or Treat", img: "img/8-bits_trick_or_treat.webp" },

    // 12. Tormenta
    { id: "tormenta", name: "Espíritu Tormenta", img: "img/tormenta.webp" },
    { id: "tormenta-dorado", name: "Espíritu Tormenta Dorado", img: "img/tormenta-dorado.webp" },
    { id: "tormenta-hacker", name: "Espíritu Tormenta Hacker", img: "img/tormenta-hacker.webp" },
    { id: "tormenta_bounty", name: "Espíritu Tormenta Bounty", img: "img/tormenta_bounty.webp" },
    { id: "tormenta_loot", name: "Espíritu Tormenta Loot", img: "img/tormenta_loot.webp" },
    { id: "tormenta_trick_or_treat", name: "Espíritu Tormenta Trick or Treat", img: "img/tormenta_trick_or_treat.webp" },

    // 13. Onigiri
    { id: "onigiri", name: "Espíritu Onigiri", img: "img/onigiri.webp" },
    { id: "onigiri-dorado", name: "Espíritu Onigiri Dorado", img: "img/onigiri-dorado.webp" },
    { id: "onigiri-hacker", name: "Espíritu Onigiri Hacker", img: "img/onigiri-hacker.webp" },
    { id: "onigiri_bounty", name: "Espíritu Onigiri Bounty", img: "img/onigiri_bounty.webp" },
    { id: "onigiri_loot", name: "Espíritu Onigiri Loot", img: "img/onigiri_loot.webp" },
    { id: "onigiri_trick_or_treat", name: "Espíritu Onigiri Trick or Treat", img: "img/onigiri_trick_or_treat.webp" },

    // 14. Overshield
    { id: "overshield", name: "Espíritu Overshield", img: "img/overshield.webp" },
    { id: "overshield-dorado", name: "Espíritu Overshield Dorado", img: "img/overshield-dorado.webp" },
    { id: "overshield-hacker", name: "Espíritu Overshield Hacker", img: "img/overshield-hacker.webp" },
    { id: "overshield_bounty", name: "Espíritu Overshield Bounty", img: "img/overshield_bounty.webp" },
    { id: "overshield_loot", name: "Espíritu Overshield Loot", img: "img/overshield_loot.webp" },
    { id: "overshield_trick_or_treat", name: "Espíritu Overshield Trick or Treat", img: "img/overshield_trick_or_treat.webp" },

    // 15. X-Ray
    { id: "x-ray", name: "Espíritu X-Ray", img: "img/x-ray.webp" },
    { id: "x-ray-dorado", name: "Espíritu X-Ray Dorado", img: "img/x-ray-dorado.webp" },
    { id: "x-ray-hacker", name: "Espíritu X-Ray Hacker", img: "img/x-ray-hacker.webp" },
    { id: "x-ray_bounty", name: "Espíritu X-Ray Bounty", img: "img/x-ray_bounty.webp" },
    { id: "x-ray_loot", name: "Espíritu X-Ray Loot", img: "img/x-ray_loot.webp" },
    { id: "x-ray_trick_or_treat", name: "Espíritu X-Ray Trick or Treat", img: "img/x-ray_trick_or_treat.webp" },

    // 16. Birthday
    { id: "birthday", name: "Espíritu Birthday", img: "img/birthday.webp" },
    { id: "birthday_dorado", name: "Espíritu Birthday Dorado", img: "img/birthday_dorado.webp" },
    { id: "birthday_hacker", name: "Espíritu Birthday Hacker", img: "img/birthday_hacker.webp" },
    { id: "birthday_bounty", name: "Espíritu Birthday Bounty", img: "img/birthday_bounty.webp" },
    { id: "birthday_loot", name: "Espíritu Birthday Loot", img: "img/birthday_loot.webp" },
    { id: "birthday_trick_or_treat", name: "Espíritu Birthday Trick or Treat", img: "img/birthday_trick_or_treat.webp" },

    // 17. Blinky
    { id: "blinky", name: "Espíritu Blinky", img: "img/blinky.webp" },
    { id: "blinky_dorado", name: "Espíritu Blinky Dorado", img: "img/blinky_dorado.webp" },
    { id: "blinky_hacker", name: "Espíritu Blinky Hacker", img: "img/blinky_hacker.webp" },
    { id: "blinky_bounty", name: "Espíritu Blinky Bounty", img: "img/blinky_bounty.webp" },
    { id: "blinky_loot", name: "Espíritu Blinky Loot", img: "img/blinky_loot.webp" },
    { id: "blinky_trick_or_treat", name: "Espíritu Blinky Trick or Treat", img: "img/blinky_trick_or_treat.webp" },

    // 18. Crash
    { id: "crash", name: "Espíritu Crash", img: "img/crash.webp" },
    { id: "crash_dorado", name: "Espíritu Crash Dorado", img: "img/crash_dorado.webp" },
    { id: "crash_hacker", name: "Espíritu Crash Hacker", img: "img/crash_hacker.webp" },
    { id: "crash_bounty", name: "Espíritu Crash Bounty", img: "img/crash_bounty.webp" },
    { id: "crash_loot", name: "Espíritu Crash Loot", img: "img/crash_loot.webp" },
    { id: "crash_trick_or_treat", name: "Espíritu Crash Trick or Treat", img: "img/crash_trick_or_treat.webp" },

    // 19. Deer
    { id: "deer", name: "Espíritu Deer", img: "img/deer.webp" },
    { id: "deer_dorado", name: "Espíritu Deer Dorado", img: "img/deer_dorado.webp" },
    { id: "deer_hacker", name: "Espíritu Deer Hacker", img: "img/deer_hacker.webp" },
    { id: "deer_bounty", name: "Espíritu Deer Bounty", img: "img/deer_bounty.webp" },
    { id: "deer_loot", name: "Espíritu Deer Loot", img: "img/deer_loot.webp" },
    { id: "deer_trick_or_treat", name: "Espíritu Deer Trick or Treat", img: "img/deer_trick_or_treat.webp" },

    // 20. Dumpster
    { id: "dumpster", name: "Espíritu Dumpster", img: "img/dumpster.webp" },
    { id: "dumpster_dorado", name: "Espíritu Dumpster Dorado", img: "img/dumpster_dorado.webp" },
    { id: "dumpster_hacker", name: "Espíritu Dumpster Hacker", img: "img/dumpster_hacker.webp" },
    { id: "dumpster_bounty", name: "Espíritu Dumpster Bounty", img: "img/dumpster_bounty.webp" },
    { id: "dumpster_loot", name: "Espíritu Dumpster Loot", img: "img/dumpster_loot.webp" },
    { id: "dumpster_trick_or_treat", name: "Espíritu Dumpster Trick or Treat", img: "img/dumpster_trick_or_treat.webp" },

    // 21. Morgana
    { id: "morgana", name: "Espíritu Morgana", img: "img/morgana.webp" },
    { id: "morgana_dorado", name: "Espíritu Morgana Dorado", img: "img/morgana_dorado.webp" },
    { id: "morgana_hacker", name: "Espíritu Morgana Hacker", img: "img/morgana_hacker.webp" },
    { id: "morgana_bounty", name: "Espíritu Morgana Bounty", img: "img/morgana_bounty.webp" },
    { id: "morgana_loot", name: "Espíritu Morgana Loot", img: "img/morgana_loot.webp" },
    { id: "morgana_trick_or_treat", name: "Espíritu Morgana Trick or Treat", img: "img/morgana_trick_or_treat.webp" },

    // 22. Pond
    { id: "pond", name: "Espíritu Pond", img: "img/pond.webp" },
    { id: "pond_dorado", name: "Espíritu Pond Dorado", img: "img/pond_dorado.webp" },
    { id: "pond_hacker", name: "Espíritu Pond Hacker", img: "img/pond_hacker.webp" },
    { id: "pond_bounty", name: "Espíritu Pond Bounty", img: "img/pond_bounty.webp" },
    { id: "pond_loot", name: "Espíritu Pond Loot", img: "img/pond_loot.webp" },
    { id: "pond_trick_or_treat", name: "Espíritu Pond Trick or Treat", img: "img/pond_trick_or_treat.webp" },

    // 23. Spooky
    { id: "spooky", name: "Espíritu Spooky", img: "img/spooky.webp" },
    { id: "spooky_dorado", name: "Espíritu Spooky Dorado", img: "img/spooky_dorado.webp" },
    { id: "spooky_hacker", name: "Espíritu Spooky Hacker", img: "img/spooky_hacker.webp" },
    { id: "spooky_bounty", name: "Espíritu Spooky Bounty", img: "img/spooky_bounty.webp" },
    { id: "spooky_loot", name: "Espíritu Spooky Loot", img: "img/spooky_loot.webp" },
    { id: "spooky_trick_or_treat", name: "Espíritu Spooky Trick or Treat", img: "img/spooky_trick_or_treat.webp" },
    { id: "spooky_quack", name: "Espíritu Spooky quack", img: "img/spooky_quack.webp" },

    // 24. Vampire
    { id: "vampire", name: "Espíritu Vampire", img: "img/vampire.webp" },
    { id: "vampire_dorado", name: "Espíritu Vampire Dorado", img: "img/vampire_dorado.webp" },
    { id: "vampire_hacker", name: "Espíritu Vampire Hacker", img: "img/vampire_hacker.webp" },
    { id: "vampire_bounty", name: "Espíritu Vampire Bounty", img: "img/vampire_bounty.webp" },
    { id: "vampire_loot", name: "Espíritu Vampire Loot", img: "img/vampire_loot.webp" },
    { id: "vampire_trick_or_treat", name: "Espíritu Vampire Trick or Treat", img: "img/vampire_trick_or_treat.webp" },

    // 25. One Wish Willow
    { id: "one_wish_willow", name: "Espíritu One Wish Willow", img: "img/one_wish_willow.webp" },
    { id: "one_wish_willow_dorado", name: "Espíritu One Wish Willow Dorado", img: "img/one_wish_willow_dorado.webp" },
    { id: "one_wish_willow_hacker", name: "Espíritu One Wish Willow Hacker", img: "img/one_wish_willow_hacker.webp" },
    { id: "one_wish_willow_bounty", name: "Espíritu One Wish Willow Bounty", img: "img/one_wish_willow_bounty.webp" },
    { id: "one_wish_willow_loot", name: "Espíritu One Wish Willow Loot", img: "img/one_wish_willow_loot.webp" },
    { id: "one_wish_willow_trick_or_treat", name: "Espíritu One Wish Willow Trick or Treat", img: "img/one_wish_willow_trick_or_treat.webp" },

    // 26. Honey
    { id: "honey", name: "Espíritu Honey", img: "img/honey.webp" },
    { id: "honey_dorado", name: "Espíritu Honey Dorado", img: "img/honey_dorado.webp" },
    { id: "honey_hacker", name: "Espíritu Honey Hacker", img: "img/honey_hacker.webp" },
    { id: "honey_bounty", name: "Espíritu Honey Bounty", img: "img/honey_bounty.webp" },
    { id: "honey_loot", name: "Espíritu Honey Loot", img: "img/honey_loot.webp" },
    { id: "honey_trick_or_treat", name: "Espíritu Honey Trick or Treat", img: "img/honey_trick_or_treat.webp" },

    // 27. Solitarios / Colabs
    { id: "mega-man", name: "Espíritu Mega Man", img: "img/mega-man.webp" }
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
    canvas.height = 2310;
    
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
    ctx.fillText('📱 Escanea el código para crear tu', 560, 2170);
    ctx.fillText('propia checklist interactiva:', 570, 2200);
    
    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 25px "Segoe UI", sans-serif';
    ctx.fillText('ichi9243.github.io/Fortnite-tracker/', 570, 2240);

    const qr = new QRious({
        value: 'https://ichi9243.github.io/Fortnite-tracker/',
        size: 130,          
        background: 'white', 
        foreground: 'black',
        level: 'M'         
    });

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(1060, 2130, 140, 140); 
    ctx.drawImage(qr.canvas, 1065, 2135);

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