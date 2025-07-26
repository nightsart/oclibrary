const characters = [
    { imageURL: "images/aaron.png",     name: "Aaron",      categories: ["Human", "Male", "Night", "Gang"] },
    { imageURL: "images/alyssa.png",    name: "Alyssa",     categories: ["Human", "Female", "Dj", "Others"] },
    { imageURL: "images/amy.png",       name: "Amy",        categories: ["Human", "Female", "Night", "Gang"],           fullName: "Kawa Amy (Ishikawa Kira)", quote: "Don't get all shy, now~ Tonight has only just begun!" },
    { imageURL: "images/ash.png",       name: "Arsonist",   categories: ["Human", "Male", "Dj", "Others"],              fullName: "Ashton 'Ash' Grey" },
    { imageURL: "images/ayumi.png",     name: "Ayumi",      categories: ["Human", "Female", "Night", "Others"],         fullName: "Arai Ayumi †" },
    { imageURL: "images/azure.png",     name: "Azure",      categories: ["Human", "Female", "Night", "Gang", "Others"], fullName: "Azure Lozanov" },
    { imageURL: "images/gabriel.png",   name: "Birdeye",    categories: ["Human", "Male", "Dj", "Others"],              fullName: "Gabriel Osmin" },
    { imageURL: "images/boss.png",      name: "Boss",       categories: ["Human", "Male", "Dj", "Gang"] },
    { imageURL: "images/cara.png",      name: "Cara",       categories: ["Human", "Female", "Night", "Gang"],           fullName: "Omura Cara", pronunciation: "KA-ruh", quote: "Leave me alone." },
    { imageURL: "images/cassie.png",    name: "Cassie",     categories: ["Human", "Female", "Night", "Gang"],           fullName: "Cassandra O'Connor" },
    { imageURL: "images/cherry.png",    name: "Cherry",     categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Cherry Rose </br> ❝Frosted Flame❞", species: "Demon (Dream Eater)", quote: "So hungry..." },
    { imageURL: "images/daphne.png",    name: "Daphne",     categories: ["Human", "Female", "Night", "LSH", "Pin"],            quote: "Miss, you called?" },
    { imageURL: "images/dj.png",        name: "Dj",         categories: ["Human", "Male", "Dj", "Gang"] },
    { imageURL: "images/dom.png",       name: "Dom",        categories: ["Human", "Male", "Dj", "Cops"],                fullName: "Dominic Fretelli" },
    { imageURL: "images/dorothea.png",  name: "Dorothea",   categories: ["Human", "Female", "Night", "Gang"],           fullName: "Dorothea Leconte" },
    { imageURL: "images/ela.png",       name: "Ela",        categories: ["Human", "Female", "Dj", "Cops"],              fullName: "Elizabeth Grande" },
    { imageURL: "images/eleanor.png",   name: "Eleanor",    categories: ["Human", "Female", "Night", "Others"],         fullName: "Eleanor 'Ellie' Black" },
    { imageURL: "images/ember.png",     name: "Ember",      categories: ["Human", "Female", "Night", "Cops", "Others"], fullName: "Ember Evans", quote: "Hey, wha- Stop, I said I don't like pictures..." },
    { imageURL: "images/fc25.png",      name: "FC25",       categories: ["Human", "Female", "Night", "Gang", "Others"], fullName: "FC25/FC or Ci</br>(Fabularis Ciuem Series 2 Type 5)", pronunciation: "'Ci': KEY", quote: "Why are you so delicious?" },
    { imageURL: "images/fukure.png",    name: "Fukure",     categories: ["Human", "Male", "Dj", "Cops"],                fullName: "Fukure Isayac" },
    { imageURL: "images/gwen.png",      name: "Gwen",       categories: ["Human", "Female", "Night", "Gang"],           fullName: "Gwendolyn Heartstill", quote: "Huh? What does that mean? Stop using big words with me!" },
    { imageURL: "images/iris.png",      name: "Iris",       categories: ["Human", "Female", "Night", "envision"],       fullName: "CC734 (Kris Kaelin)", quote: "Hun... You’re going to make this way more complicated than it needs to be, aren’t you?" },
    { imageURL: "images/jade.png",      name: "Jade",       categories: ["Human", "Female", "Night", "Others"],         fullName: "Jade Quinn", quote: "Sure, how can I help?" },
    { imageURL: "images/kaelani.png",   name: "Kae",        categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Kaelani </br> ❝Bibliophile❞", species: "Vuuna", quote: "But satisfaction brought it back, remember? If you're going to use idioms, use the whole quote." },
    { imageURL: "images/kenzie.png",    name: "Kenzie",     categories: ["Human", "Female", "Night", "Others"],         fullName: "Kenzie 'Zee' Sallie" },
    { imageURL: "images/kiko.png",      name: "Kiko",       categories: ["Human", "Female", "Night", "Gang", "Others"], fullName: "Tsuro Kiko" },
    { imageURL: "images/kishi.png",     name: "Kishi",      categories: ["Human", "Female", "Night", "Gang"],           fullName: "Oseki Kishi 'K'", quote: "Sorry, were you talking to me? That's too bad, I don't care." },
    { imageURL: "images/kyra.png",      name: "Kyra",       categories: ["Human", "Female", "Night", "Gang", "Others"], fullName: "Kawa Kyra (Ishikawa Ami)" },
    { imageURL: "images/lilou.png",     name: "Lilou",      categories: ["Human", "Female", "Night", "Others", "Pin"] },
    { imageURL: "images/lisy.png",      name: "Lisy",       categories: ["Human", "Female", "Night", "Cops"],           fullName: "Atari Moon", quote: "Have you lost weight? Oh, nevermind. That dress makes you look nice." },
    { imageURL: "images/liza.png",      name: "Liza",       categories: ["Human", "Female", "Dj", "envision"],          fullName: "Liza Goff" },
    { imageURL: "images/luna.png",      name: "Luna",       categories: ["Human", "Female", "Night", "Others"],         fullName: "Luna Selene", species: "Human, cat hybrid via shapeshifting", quote: "Meow?" },
    { imageURL: "images/lyra.png",      name: "Lyra",       categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Lyra Circe </br> ❝Graceful Sun❞", species: "Velis", pronunciation: "LIE-rah SIR-see", quote: "Don't think about it, dance with your heart! Nobody's watching." },
    { imageURL: "images/melissa.png",   name: "Melissa",    categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Melissa Circe </br> ❝Swift Death❞", species: "Velis", quote: "Running won't save you." },
    { imageURL: "images/mika.png",      name: "Mika",       categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Mika Quartz </br> ❝Rose Quartz❞", species: "Crysta'lynn", quote: "I  think about my family daily. Regardless, I'm glad I'm here with you right now. I think I made the right choice." },
    { imageURL: "images/mist.png",      name: "Mist",       categories: ["NonH", "Male", "Night", "LSH"],               fullName: "Mist Wraith (Kade Robertson)", species: "Cursed", quote: "To the moon and back." },
    { imageURL: "images/moon.png",      name: "Moon",       categories: ["Human", "Female", "Night", "Cops"],           fullName: "Atari Moon", species: "Human, hybrid via shapeshifting", quote: "Do they sell donuts?" },
    { imageURL: "images/naiya.png",     name: "Naiya",      categories: ["Human", "Female", "Night", "Gang"],           fullName: "Naiya Sirah", pronunciation: "NA-yah SIGH-rah", quote: "Hmm?" },
    { imageURL: "images/night.png",     name: "Night",      categories: ["NonH", "Female", "Night", "LSH"],             fullName: "Night Wraith (Ito Kimi)", species: "Cursed", quote: "No, no, you're right. I truly don't have to kill you. However, you see, I would very much enjoy sucking the life out of you." },
    { imageURL: "images/nyx.png",       name: "Nyx",        categories: ["NonH", "Female", "Night", "Gang"],            fullName: "Nyx Anthis", species: "Arctic fox hybrid", quote: "How dare you oppose me, your beautiful, humble Goddess?" },
    { imageURL: "images/oscar.png",     name: "Oscar",      categories: ["Human", "Male", "Dj", "Others"],              fullName: "Oscar 'Ozzie' Black" },
    { imageURL: "images/pandora.png",   name: "Pandora",    categories: ["Human", "Female", "Night", "envision"],       fullName: "CB071", quote: "Give up." },
    { imageURL: "images/penny.png",     name: "Penny",      categories: ["Human", "Female", "Night", "Gang", "Pin"],           fullName: "Penthesilea Parker", quote: "Nyx, I said not to- Whatever..." },
    { imageURL: "images/rae.png",       name: "Rae",        categories: ["Human", "Female", "Dj", "Others"],            fullName: "Fukure Rae" },
    { imageURL: "images/riley.png",     name: "Riley",      categories: ["Human", "Female", "Night", "Others"],         fullName: "Riley Jones" },
    { imageURL: "images/scarlet.png",   name: "Scarlet",    categories: ["Human", "Female", "Dj", "Cops"] },
    { imageURL: "images/shie.png",      name: "Shie",       categories: ["Human", "Female", "Night", "Cops"],           fullName: "Kaeshi Shie", pronunciation: "SHE-eh" },
    { imageURL: "images/skye.png",      name: "Skye",       categories: ["NonH", "Female", "Night", "LSE"],             fullName: "Skye Lua </br> ❝Gleaming Light❞ (Butterfly)", species: "Horror hybrid", quote: "You need not speak your pain for I can read it in your eyes." },
    { imageURL: "images/spectre.png",   name: "Spectre",    categories: ["Human", "Male", "Dj", "envision", "Pin"] },
    { imageURL: "images/tyler.png",     name: "Tyler",      categories: ["Human", "Male", "Night", "Others"],           quote: "Gwen..." },
    { imageURL: "images/vanilla.png",   name: "Vanilla",    categories: ["NonH", "Female", "Night", "Gang", "Others"],  fullName: "Vanilla or Nilla</br>(Fabularis Ciuem Project Type 4.7)", species: "Android", quote: "What can I help you with, Master?" },
    { imageURL: "images/winter.png",    name: "Winter",     categories: ["Human", "Female", "Dj", "Others", "Pin"] },
    { imageURL: "images/wendy.png",     name: "Wendy",      categories: ["Human", "Female", "Night", "Others"],         fullName: "Wendy Macie Harmon" },
    { imageURL: "images/redacted.png",  name: "[Redacted]", categories: ["Human", "Male", "Dj", "Others"] },
];

const charactersContainer = document.querySelector('.characters');
const searchInput = document.getElementById('searchCharacter');
const filterButtons = document.querySelectorAll('.filters button');

function displayCharacters(charactersArray) {
    charactersContainer.innerHTML = "";

    charactersArray.forEach(character => {
        let popupContent = "";
        if (Object.hasOwn(character, "pronunciation")) {
            popupContent += `Pronunciation: <span class='pronunciation'>${character.pronunciation}</span><br/>`;
        }
        if (Object.hasOwn(character, "species")) {
            popupContent += `Species: <span class='species'>${character.species}</span><br/>`
        }
        if (Object.hasOwn(character, "quote")) {
            popupContent += `❝ <span class='quote'>${character.quote}❞</span><br/>`
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
        filterCharacters();
    });
});

searchInput.addEventListener('input', () => {
    filterCharacters();
});

displayCharacters(characters);