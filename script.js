const characters = [
    { imageURL: "images/aaron.webp",     name: "Aaron",      categories: ["Human", "Male", "Night", "Gang"],             rune:"Shadows Manipulation", quote: "You're perfect the way you are.", },
    { imageURL: "images/alyssa.webp",    name: "Alyssa",     categories: ["Human", "Female", "Dj", "Others"],            rune:"None" },
    { imageURL: "images/amy.webp",       name: "Amy",        categories: ["Human", "Female", "Night", "Gang"],           fullName: "Kawa Amy (Ishikawa Kira)", rune:"Nightmare", quote: "Don't get all shy, now~ Tonight has only just begun!", runeURL:"images/amy_rune.webp", vgenURL:"https://vsona.co/amyk", },
    { imageURL: "images/anko.webp",      name: "Anko",       categories: ["Human", "Female", "Night", "Others"],         fullName: "Kamei Anko", rune:"None", },
    { imageURL: "images/ash.webp",       name: "Arsonist",   categories: ["Human", "Male", "Dj", "envision", "Others"],  fullName: "Ashton 'Ash' Grey", rune:"Bonds" },
    { imageURL: "images/ayumi.webp",     name: "Ayumi",      categories: ["Human", "Female", "Night", "Others"],         fullName: "Arai Ayumi †", rune:"Organic sight" },
    { imageURL: "images/azure.webp",     name: "Azure",      categories: ["Human", "Female", "Night", "Gang", "Others"], fullName: "Azure Lozanov", rune:"Thread creation" },
    { imageURL: "images/gabriel.webp",   name: "Birdeye",    categories: ["Human", "Male", "Dj", "Others"],              fullName: "Gabriel Osmin", rune:"None" },
    { imageURL: "images/boss.webp",      name: "Boss",       categories: ["Human", "Male", "Dj", "Gang"],                 },
    { imageURL: "images/cara.webp",      name: "Cara",       categories: ["Human", "Female", "Night", "Gang"],           fullName: "Omura Cara", pronunciation: "KA-ruh", rune:"Animal shifting", quote: "I know he's still out there, somewhere, I simply haven’t found him yet.", runeURL:"images/cara_rune.webp", vgenURL:"https://vsona.co/cara", },
    { imageURL: "images/cassie.webp",    name: "Cassie",     categories: ["Human", "Female", "Night", "Gang"],           fullName: "Cassandra O'Connor", rune:"Tricks & Mirrors" },
    { imageURL: "images/cherry.webp",    name: "Cherry",     categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Cherry Rose</br>❝Frosted Flame❞", species: "Dream Eater", ability:"Soporific flames", quote: "So hungry...", vgenURL:"https://vsona.co/cherryrose", },
    { imageURL: "images/daphne.webp",    name: "Daphne",     categories: ["Human", "Female", "Night", "LSH"],            fullName: "Daphne †", quote: "Miss, you called?" },
    { imageURL: "images/dawn.webp",      name: "Dawn",       categories: ["NonH", "Female", "Night", "LSA"],             fullName: "❝Timeless Embrace❞", species: "Arctic fox hybrid", ability:"Crystal" },
    { imageURL: "images/dj.webp",        name: "DJ",         categories: ["Human", "Male", "Dj", "Gang"],                 },
    { imageURL: "images/dolly.webp",     name: "Dolly",      categories: ["Human", "Female", "Night", "LSE"],            fullName: "Draya Sirah</br>❝Porcelain Phantom❞", ability:"Reconstruct", quote: "I don't remember you." },
    { imageURL: "images/dom.webp",       name: "Dom",        categories: ["Human", "Male", "Dj", "Cops"],                fullName: "Dominic Fretelli", rune:"???" },
    { imageURL: "images/dorothea.webp",  name: "Dorothea",   categories: ["Human", "Female", "Night", "Gang"],           fullName: "Dorothea Leconte", rune:"Subliminal desire" },
    { imageURL: "images/ela.webp",       name: "Ela",        categories: ["Human", "Female", "Dj", "Cops"],              fullName: "Elizabeth Grande", rune:"Puppeteer" },
    { imageURL: "images/eleanor.webp",   name: "Eleanor",    categories: ["Human", "Female", "Night", "Others"],         fullName: "Eleanor 'Ellie' Black", rune:"Portals" },
    { imageURL: "images/ember.webp",     name: "Ember",      categories: ["Human", "Female", "Night", "Cops", "Others"], fullName: "Ember Evans", rune:"Knot", quote: "Why do all this for me?", runeURL:"images/ember_rune.webp", vgenURL:"https://vsona.co/ember", },
    { imageURL: "images/evan.webp",      name: "Evan",       categories: ["Human", "Male", "Night", "LSA"],              species: "Human" },
    { imageURL: "images/fc25.webp",      name: "FC25",       categories: ["Human", "Female", "Night", "Gang", "Others"], fullName: "FC or Ci</br>(Fabularis Ciuem</br>Version 25)", pronunciation: "'Ci': KEY", rune:"Tracking", quote: "Why are you so delicious?", runeURL:"images/fc25_rune.webp", vgenURL:"https://vsona.co/fc25", },
    { imageURL: "images/fukure.webp",    name: "Fukure",     categories: ["Human", "Male", "Dj", "Cops"],                fullName: "Fukure Isayac", rune:"Memory manipulation" },
    { imageURL: "images/gwen.webp",      name: "Gwen",       categories: ["Human", "Female", "Night", "Gang"],           fullName: "Gwendolyn Heartstill", rune:"Toxic empathy", quote: "Huh? What does that mean? Stop using big words with me!", runeURL:"images/gwen_rune.webp", vgenURL:"https://vsona.co/gwenheart", },
    { imageURL: "images/iris.webp",      name: "Iris",       categories: ["Human", "Female", "Night", "envision"],       fullName: "CC734 (Kris Kaelin)", rune:"Tentacles - Thermal eye - Incorporeal", quote: "Hun... You’re going to make this way more complicated than it needs to be, aren’t you?", runeURL:"images/iris_rune.webp", vgenURL:"https://vsona.co/iwisu", },
    { imageURL: "images/jade.webp",      name: "Jade",       categories: ["Human", "Female", "Night", "Others"],         fullName: "Jade Quinn", rune:"Crystalline resonance", quote: "Sure, how can I help?", runeURL:"images/jade_rune.webp", vgenURL:"https://vsona.co/jadequinn", },
    { imageURL: "images/kaelani.webp",   name: "Kae",        categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Kaelani</br>❝Bibliophile❞", pronunciation: "kay- or ka-eh-LAH-nee", species: "Hybrid", ability:"Abyss", quote: "But satisfaction brought it back, remember? If you're going to use idioms, use the whole quote.", vgenURL:"https://vsona.co/kaelani", },
    { imageURL: "images/ken.webp",       name: "Ken",        categories: ["Human", "Male", "Night", "Others"],           fullName: "Takeda Kenzo", rune:"Erasure", quote: "Memories are fragile." },
    { imageURL: "images/kenzie.webp",    name: "Kenzie",     categories: ["Human", "Female", "Night", "Others"],         fullName: "Kenzie 'Zee' Sallie", rune:"Rewrite" },
    { imageURL: "images/kiara.webp",     name: "Kiara",      categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Kiara</br>❝The Ruthless❞", species: "Horror", pronunciation: "kee-AR-uh", quote: "Oh, shut your hole! You worthless, pathetic, whining little rat. Is this how you intended to protect your family? I must be doing them a favor.", vgenURL:"https://vsona.co/generalkiara", },
    { imageURL: "images/kiko.webp",      name: "Kiko",       categories: ["Human", "Female", "Night", "Gang", "Others"], fullName: "Tsuro Kiko", rune:"Rewind" },
    { imageURL: "images/kishi.webp",     name: "Kishi",      categories: ["Human", "Female", "Night", "Gang"],           fullName: "Oseki Kishi 'K'", rune:"Hypnosis", quote: "Sorry, were you talking to me? That's too bad, I don't care.", runeURL:"images/kishi_rune.webp", vgenURL:"https://vsona.co/kishi", },
    { imageURL: "images/kyra.webp",      name: "Kyra",       categories: ["Human", "Female", "Night", "Gang", "Others"], fullName: "Kyra Lozanov</br>(Kawa Kyra/Ishikawa Ami)", rune:"Sweet dreams", runeURL:"images/kyra_rune.webp", },
    { imageURL: "images/lilou.webp",     name: "Lilou",      categories: ["Human", "Female", "Night", "Others"],         rune:"Grafting" },
    { imageURL: "images/lisy.webp",      name: "Lisy",       categories: ["Human", "Female", "Night", "Cops"],           fullName: "Atari Moon", rune:"Blood roses", quote: "Have you lost weight? Oh, nevermind. That dress makes you look nice.", runeURL:"images/lisy_rune.webp", vgenURL:"https://vsona.co/lisy", },
    { imageURL: "images/liza.webp",      name: "Liza",       categories: ["Human", "Female", "Dj", "envision"],          fullName: "Liza Goff", rune:"Rhythm sync" },
    { imageURL: "images/luna.webp",      name: "Luna",       categories: ["Human", "NonH", "Female", "Night", "Others"], fullName: "Luna Selene", species: "Human, cat hybrid via shapeshifting", rune:"Cat", quote: "Meow?" },
    { imageURL: "images/lyra.webp",      name: "Lyra",       categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Lyra Circe</br>❝Graceful Sun❞", pronunciation: "LIE-rah SIR-see", species: "Cat hybrid", quote: "Don't think about it, dance with your heart! Nobody's watching." },
    { imageURL: "images/melissa.webp",   name: "Melissa",    categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Melissa Circe</br>❝Swift Death❞", species: "Cat hybrid", quote: "Running won't save you." },
    { imageURL: "images/mei.webp",       name: "Mei",        categories: ["Human", "Female", "Night", "Others"],         fullName: "Nakamura Mei", rune:"None" },
    { imageURL: "images/mika.webp",      name: "Mika",       categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Mika Quartz</br>❝Rose Quartz❞", species: "Fox hybrid", ability:"Celestial Archer", quote: "I miss my family but I'm glad I'm here with you right now. I think I made the right choice." },
    { imageURL: "images/mist.webp",      name: "Mist",       categories: ["NonH", "Male", "Night", "LSH"],               fullName: "Mist Wraith (Kade Robertson)", species: "Cursed", ability:"Veil", quote: "To the moon and back." },
    { imageURL: "images/moon.webp",      name: "Moon",       categories: ["NonH", "Female", "Night", "Cops"],            fullName: "Atari Moon", species: "Rabbit hybrid", quote: "Do they sell donuts?" },
    { imageURL: "images/naiya.webp",     name: "Naiya",      categories: ["Human", "Female", "Night", "Gang"],           fullName: "Naiya Sirah", pronunciation: "NA-yah SIGH-rah", rune:"Magnets", quote: "Hmm?", runeURL:"images/naiya_rune.webp", vgenURL:"https://vsona.co/naiya", },
    { imageURL: "images/night.webp",     name: "Night",      categories: ["NonH", "Female", "Night", "LSH"],             fullName: "Night Wraith (Ito Kimi)", species: "Cursed", ability:"Threads", quote: "No, no, you're right. I truly don't have to kill you. However, you see, I would very much enjoy sucking the life out of you." },
    { imageURL: "images/nyx.webp",       name: "Nyx",        categories: ["NonH", "Female", "Night", "Gang"],            fullName: "Nyx Anthis", species: "Fox hybrid", rune:"Light bending - Size manipulation", quote: "How dare you oppose me, your beautiful, humble Goddess?", runeURL:"images/nyx_rune.webp", vgenURL:"https://vsona.co/goddessnyx", },
    { imageURL: "images/oscar.webp",     name: "Oscar",      categories: ["Human", "Male", "Dj", "Others", "Pin"],              fullName: "Oscar 'Ozzie' Black", rune:"Voodoo doll" },
    { imageURL: "images/pandora.webp",   name: "Pandora",    categories: ["Human", "Female", "Night", "envision"],       fullName: "CB071", rune:"Toxicity - Energy steal - Blink", quote: "Give up." },
    { imageURL: "images/penny.webp",     name: "Penny",      categories: ["Human", "Female", "Night", "Gang"],           fullName: "Penthesilea Parker", rune:"Faster healing", quote: "Nyx, I said not to- Whatever..." },
    { imageURL: "images/rae.webp",       name: "Rae",        categories: ["Human", "Female", "Dj", "Others"],            fullName: "Fukure Rae", rune:"Tsukuyomi" },
    { imageURL: "images/riley.webp",     name: "Riley",      categories: ["Human", "Female", "Night", "Others"],         fullName: "Riley Jones", rune:"Shapeshifting", runeURL:"images/riley_rune.webp", quote: "I'm still here." },
    { imageURL: "images/scarlet.webp",   name: "Scarlet",    categories: ["Human", "Female", "Dj", "Cops"],              rune:"Momentum control" },
    { imageURL: "images/shie.webp",      name: "Shie",       categories: ["Human", "Female", "Night", "Cops"],           fullName: "Kaeshi Shie", pronunciation: "SHE-eh", rune:"Freeze" },
    { imageURL: "images/skye.webp",      name: "Skye",       categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Skye Lua</br>❝Gleaming Light❞ (Butterfly)", species: "Horror hybrid", ability:"Protection", quote: "You need not speak your pain for I can read it in your eyes." },
    { imageURL: "images/spectre.webp",   name: "Spectre",    categories: ["Human", "Male", "Dj", "envision"],             },
    { imageURL: "images/summer.webp",    name: "Summer",     categories: ["Human", "Female", "Night", "LSH"],            fullName: "Summer", quote: "Me? Nah, there's no way I'd be the final girl. More like the one who dies in the prologue." },
    { imageURL: "images/tyler.webp",     name: "Tyler",      categories: ["Human", "Male", "Night", "Others"],           rune:"None", quote: "Gwen..." },
    { imageURL: "images/vanilla.webp",   name: "Vanilla",    categories: ["NonH", "Female", "Night", "Gang", "Others"],  fullName: "Vanilla Wafer or Nilla</br>(Fabularis Ciuem</br>Branch 4 Version 7)", species: "Android", rune:"None", quote: "What can I help you with, Master?", vgenURL:"https://vsona.co/vanillawafer", },
    { imageURL: "images/wendy.webp",     name: "Wendy",      categories: ["Human", "Female", "Night", "Others",],        fullName: "Wendy Macie Harmon", rune:"Metal manipulation", runeURL:"images/wendy_rune.webp", vgenURL:"https://vsona.co/wendyharmon", },
    { imageURL: "images/winter.webp",    name: "Winter",     categories: ["Human", "Female", "Dj", "Others"],             },
    { imageURL: "images/redacted.webp",  name: "[Redacted]", categories: ["Human", "Male", "Dj", "Others"],              rune:"???" },
];

const charactersContainer = document.querySelector('.characters');
const searchInput = document.getElementById('searchCharacter');
const filterButtons = document.querySelectorAll('.filters button');
const sidebarThreshold = 962;

function displayCharacters(charactersArray) {
    charactersContainer.innerHTML = "";

    charactersArray.forEach(character => {
        let popupContent = "";
        if (Object.hasOwn(character, "pronunciation")) {
            popupContent += `🔉 <span class='pronunciation'>${character.pronunciation}</span><br/>`;
        }
        if (Object.hasOwn(character, "species")) {
            popupContent += `Species: <span class='species'>${character.species}</span><br/>`
        }
        if (Object.hasOwn(character, "rune")) {
            popupContent += `Rune: <span class='rune'>${character.rune}</span><br/>`
        }
        if (Object.hasOwn(character, "ability")) {
            popupContent += `Specialty: <span class='ability'>${character.ability}</span><br/>`
        }
        if (Object.hasOwn(character, "vgenURL")) {
            popupContent += `<a href=${character.vgenURL} class='vgenURL' target='_blank'>VGEN Link ↗</a><br/>`
        }
        if (Object.hasOwn(character, "runeURL")) {
            popupContent += `<img class='runeImage' src='${character.runeURL}' alt='${character.rune} icon'><br/>`;
        }
        if (Object.hasOwn(character, "quote")) {
            popupContent += `<hr>❝ <span class='quote'>${character.quote}❞</span><br/>`
        }
        const fullName = Object.hasOwn(character, "fullName") ? character.fullName : character.name;

        const fragment = `
    <div class="character" tabindex="0" class="btn btn-lg text-nowrap" role="button"
         data-bs-toggle="popover" data-bs-trigger="focus"
         data-bs-placement="auto" data-bs-title="${fullName}"
         data-bs-html="true" data-bs-content="${popupContent}"
         data-bs-custom-class="custom-popover">
        <img src="${character.imageURL}" alt="${character.name}">
        <p>${character.name}</p>
    </div>`;
        charactersContainer.insertAdjacentHTML("beforeend", fragment);
    });

    initializePopovers()
}

function filterCharacters() {
    let pressedButtons = Array.from(document.querySelectorAll('.filters button.pressed'));
    let filteredCharacters = characters;

    let showAll = pressedButtons.length == 0 || pressedButtons[0].dataset.category == "all";

    if (!showAll) {
        // each element of the array is logically ANDed
        // each subarray is logically ORed
        // [["Human"], ["Male"], ["Runes"]] => Human AND Male AND Runes
        // [["Human", "NonH"], ["Female"], ["LSE", "LSH"]] => (Human or NonH) AND Female AND (LSE or LSH)
        let categoryGroups = pressedButtons.map(button => button.dataset.category.split(";"));
        filteredCharacters = characters.filter(character => categoryGroups.every(group => group.some(category => character.categories.includes(category))));
    }
    filteredCharacters = searchCharacters(filteredCharacters);
    displayCharacters(filteredCharacters);
}

function searchCharacters(characters) {
    const searchText = searchInput.value.toLowerCase();
    return characters.filter(character => character.name.toLowerCase().includes(searchText));
}

function initializePopovers() {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
}

function w3_open() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.dataset.openedAt = window.innerWidth;
    sidebar.dataset.closedAt = -1;
    sidebar.classList.remove("fade-out");
    sidebar.classList.add("fade-in");
}

function w3_close() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.dataset.closedAt = window.innerWidth;
    sidebar.dataset.openedAt = -1;
    sidebar.classList.remove("fade-in");
    sidebar.classList.add("fade-out");
}

function check_sidebar_resize() {
    var sidebar = document.getElementById("mySidebar");
    var isVisible = document.getElementById("mySidebar").checkVisibility({
        visibilityProperty: true,
    });
    var closedAt = Number(sidebar.dataset.closedAt);
    var openedAt = Number(sidebar.dataset.openedAt);
    if (window.innerWidth < sidebarThreshold && isVisible && openedAt >= sidebarThreshold) {
        w3_close();
    } else if (window.innerWidth >= sidebarThreshold && !isVisible && closedAt < sidebarThreshold) {
        w3_open();
    }
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('pressed');

        // We let the "All" button reset every other button.
        // This also means that when we click on another filter, we should deselect the all button
        if (button.dataset.category == "all") {
            document.querySelectorAll('.filters button.pressed[data-type="filter"]').forEach(button => button.classList.toggle('pressed'));
        } else {
            document.querySelectorAll('.filters button.pressed[data-type="reset"]').forEach(button => button.classList.toggle('pressed'));
        }

        if (button.dataset.story == "Runes") {
            document.querySelectorAll('.filters button.pressed[data-story="lost souls"]').forEach(button => button.classList.remove('pressed'));
        }
        if (button.dataset.story == "lost souls") {
            document.querySelectorAll('.filters button.pressed[data-story="Runes"]').forEach(button => button.classList.remove('pressed'));
        }

        if (button.dataset.owner == "Nights") {
            document.querySelectorAll('.filters button.pressed[data-owner="Djs"]').forEach(button => button.classList.remove('pressed'));
        }
        if (button.dataset.owner == "Djs") {
            document.querySelectorAll('.filters button.pressed[data-owner="Nights"]').forEach(button => button.classList.remove('pressed'));
        }

        if (button.dataset.gender == "Female") {
            document.querySelectorAll('.filters button.pressed[data-gender="Male"]').forEach(button => button.classList.remove('pressed'));
        }
        if (button.dataset.gender == "Male") {
            document.querySelectorAll('.filters button.pressed[data-gender="Female"]').forEach(button => button.classList.remove('pressed'));
        }

        filterCharacters();
    });
});

searchInput.addEventListener('input', () => {
    filterCharacters();
});


displayCharacters(characters);

window.addEventListener('resize', check_sidebar_resize);
check_sidebar_resize();


// stories.html specific code below
// escape HTML to safely render .txt content inside innerHTML
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
// Function to load content based on a "page" identifier
async function loadContent(page) {
    const container = document.getElementById('content-container');
    if (!container) {
        console.warn('loadContent: #content-container not found');
        return;
    }
    let content = '';

    // In a real application, you would fetch content from a server or API.
    // Here we use a simple switch statement.
    switch (page) {
        case 'cheater':
            try {
                const res = await fetch('stories/cheater.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Cheater</h2>
                    <div class="character-images">
                        <img src="images/amy.webp" alt="Amy" class="character-image" title="Amy">
                        <img src="images/kyra.webp" alt="Kyra" class="character-image" title="Kyra">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load cheater.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'nmAmy':
            try {
                const res = await fetch('stories/nm amy.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Nightmare:</br>Amy</h2>
                    <div class="character-images">
                        <img src="images/amy.webp" alt="Amy" class="character-image" title="Amy">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load nm amy.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'gone':
            try {
                const res = await fetch('stories/gone.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Gone</h2>
                    <div class="character-images">
                        <img src="images/nyx.webp" alt="Nyx" class="character-image" title="Nyx">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load gone.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'gun':
            // Load the plain text story from the stories folder and display it
            try {
                const res = await fetch('stories/gun.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                // Wrap in a <pre> to preserve formatting and escape HTML to avoid injection
                content = `<div class="header-container">
                    <h2>Gun</h2>
                    <div class="character-images">
                        <img src="images/amy.webp" alt="Amy" class="character-image" title="Amy">
                        <img src="images/kyra.webp" alt="Kyra" class="character-image" title="Kyra">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load gun.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'mistakes':
            // Load the plain text story from the stories folder and display it
            try {
                const res = await fetch('stories/mistakes.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                // Wrap in a <pre> to preserve formatting and escape HTML to avoid injection
                content = `<div class="header-container">
                    <h2>Mistakes</h2>
                    <div class="character-images">
                        <img src="images/amy.webp" alt="Amy" class="character-image" title="Amy">
                        <img src="images/cara.webp" alt="Cara" class="character-image" title="Cara">
                        <img src="images/aaron.webp" alt="Aaron" class="character-image" title="Aaron">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load mistakes.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'food':
            try {
                const res = await fetch('stories/food.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Food</h2>
                    <div class="character-images">
                        <img src="images/naiya.webp" alt="Naiya" class="character-image" title="Naiya">
                        <img src="images/penny.webp" alt="Penny" class="character-image" title="Penny">
                        <img src="images/amy.webp" alt="Amy" class="character-image" title="Amy">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load food.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'cry':
            try {
                const res = await fetch('stories/cry.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Cry</h2>
                    <div class="character-images">
                        <img src="images/ember.webp" alt="Ember" class="character-image" title="Ember">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load cry.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'end':
            try {
                const res = await fetch('stories/end.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>End</h2>
                    <div class="character-images">
                        <img src="images/gwen.webp" alt="Gwen" class="character-image" title="Gwen">
                        <img src="images/kishi.webp" alt="Kishi" class="character-image" title="Kishi">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load end.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'herDay':
            try {
                const res = await fetch('stories/her day.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Her Day</h2>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load her day.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'evening':
            try {
                const res = await fetch('stories/evening.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Evening</h2>
                    <div class="character-images">
                        <img src="images/fc25.webp" alt="FC25" class="character-image" title="FC25">
                        <img src="images/gwen.webp" alt="Gwen" class="character-image" title="Gwen">
                        <img src="images/tyler.webp" alt="Tyler" class="character-image" title="Tyler">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load evening.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'aftermath':
            try {
                const res = await fetch('stories/aftermath.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Aftermath</h2>
                    <div class="character-images">
                        <img src="images/fc25.webp" alt="FC25" class="character-image" title="FC25">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load aftermath.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'live':
            try {
                const res = await fetch('stories/live.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Live</h2>
                    <div class="character-images">
                        <img src="images/lisy.webp" alt="Lisy" class="character-image" title="Lisy">
                        <img src="images/moon.webp" alt="Moon" class="character-image" title="Moon">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load live.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'control':
            try {
                const res = await fetch('stories/control.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Control</h2>
                    <div class="character-images">
                        <img src="images/lisy.webp" alt="Lisy" class="character-image" title="Lisy">
                        <img src="images/moon.webp" alt="Moon" class="character-image" title="Moon">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load control.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'alone':
            try {
                const res = await fetch('stories/alone.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>✦ alone</h2>
                    <div class="character-images">
                        <img src="images/night.webp" alt="Night" class="character-image" title="Night">
                        <img src="images/mist.webp" alt="Mist" class="character-image" title="Mist">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load alone.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'eyes':
            try {
                const res = await fetch('stories/eyes.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>✦ eyes</h2>
                    <div class="character-images">
                        <img src="images/mist.webp" alt="Mist" class="character-image" title="Mist">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load eyes.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'pulse':
            // Load the plain text story from the stories folder and display it
            try {
                const res = await fetch('stories/pulse.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                // Wrap in a <pre> to preserve formatting and escape HTML to avoid injection
                content = `<div class="header-container">
                    <h2>✿ pulse</h2>
                    <img src="images/kiara.webp" alt="Kiara" class="character-image" title="Kiara">
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load gun.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'nmStuck':
            try {
                const res = await fetch('stories/nm stuck.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Nightmare:</br>Stuck</h2>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load nm stuck.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'nmNap':
            try {
                const res = await fetch('stories/nm nap.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Nightmare:</br>Nap</h2>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load nm nap.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        default:
            content = '<h2>404 Not Found</h2>';
    }

    container.innerHTML = content;
}

// Load the initial content when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    loadContent('home');
});