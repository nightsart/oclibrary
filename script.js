const characters = window.CHARACTERS || [];

const charactersContainer = document.querySelector('.characters');
const galleryContainer = document.querySelector('.gallerypics');
const searchInput = document.getElementById('searchCharacter');
const filterButtons = document.querySelectorAll('.filters button');
const sidebarThreshold = 962;
const monthOrder = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function buildPopupContent(character) {
    let popupContent = "";
    if (Object.hasOwn(character, "pronunciation")) {
        popupContent += `🔉 <span class='pronunciation'>${character.pronunciation}</span><br/>`;
    }
    if (Object.hasOwn(character, "species")) {
        popupContent += `Species: <span class='species'>${character.species}</span><br/>`;
    }
    if (Object.hasOwn(character, "rune")) {
        popupContent += `Rune: <span class='rune'>${character.rune}</span><br/>`;
    }
    if (Object.hasOwn(character, "ability")) {
        popupContent += `Specialty: <span class='ability'>${character.ability}</span><br/>`;
    }
    if (Object.hasOwn(character, "bDay")) {
        popupContent += `Birthday: <span class='birthday'>${character.bMonth} ${character.bDay}</span><br/>`;
    }
    if (Object.hasOwn(character, "parents")) {
        popupContent += `Parents: <span class='parents'>${character.parents}</span><br/>`;
    }
    if (Object.hasOwn(character, "vgenURL")) {
        popupContent += `<a href=${character.vgenURL} class='vgenURL' target='_blank'>VGEN Link ↗</a><br/>`;
    }
    if (Object.hasOwn(character, "runeURL")) {
        popupContent += `<img class='runeImage' src='${character.runeURL}' alt='${character.rune} icon'><br/>`;
    }
    if (Object.hasOwn(character, "quote")) {
        popupContent += `<hr>❝ <span class='quote'>${character.quote}❞</span><br/>`;
    }
    return popupContent;
}

function buildCharacterFragment(character) {
    const popupContent = buildPopupContent(character);
    const fullName = Object.hasOwn(character, "fullName") ? character.fullName : character.name;
    return `
    <div class="character" tabindex="0" class="btn btn-lg text-nowrap" role="button"
         data-bs-toggle="popover" data-bs-trigger="focus"
         data-bs-placement="auto" data-bs-title="${fullName}"
         data-bs-html="true" data-bs-content="${popupContent}"
         data-bs-custom-class="custom-popover">
        <img src="${character.imageURL}" alt="${character.name}">
        <p>${character.name}</p>
    </div>`;
}

function buildBirthdayFragment(character, dateLabel) {
    const popupContent = buildPopupContent(character);
    const fullName = Object.hasOwn(character, "fullName") ? character.fullName : character.name;
    return `
    <div class="character" tabindex="0" role="button"
         data-bs-toggle="popover" data-bs-trigger="focus"
         data-bs-placement="auto" data-bs-title="${fullName}"
         data-bs-html="true" data-bs-content="${popupContent}"
         data-bs-custom-class="custom-popover">
        <img src="${character.imageURL}" alt="${character.name}">
        <p class="birthday-label">${dateLabel}</p>
    </div>`;
}

function displayCharacters(charactersArray) {
    if (!charactersContainer) {
        return;
    }

    charactersContainer.innerHTML = "";

    charactersArray.forEach(character => {
        const fragment = buildCharacterFragment(character);
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
    if (!searchInput) {
        return characters;
    }

    const searchText = searchInput.value.toLowerCase();
    return characters.filter(character => character.name.toLowerCase().includes(searchText));
}

function initializePopovers() {
    if (typeof bootstrap === "undefined") {
        return;
    }

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
}

function getBirthdayGroups() {
    const groupedByMonth = new Map(monthOrder.map(month => [month, new Map()]));
    const unknownBirthdays = [];

    characters.forEach(character => {
        const day = Number(character.bDay);
        const hasKnownMonth = monthOrder.includes(character.bMonth);
        const hasKnownDay = Number.isFinite(day);

        if (!hasKnownMonth || !hasKnownDay) {
            unknownBirthdays.push(character);
            return;
        }

        const monthDays = groupedByMonth.get(character.bMonth);
        if (!monthDays.has(day)) {
            monthDays.set(day, []);
        }
        monthDays.get(day).push(character);
    });

    monthOrder.forEach(month => {
        const daysMap = groupedByMonth.get(month);
        for (const [day, chars] of daysMap.entries()) {
            chars.sort((a, b) => a.name.localeCompare(b.name));
        }
        groupedByMonth.set(month, new Map([...daysMap.entries()].sort((a, b) => a[0] - b[0])));
    });

    unknownBirthdays.sort((a, b) => a.name.localeCompare(b.name));
    return { groupedByMonth, unknownBirthdays };
}

function displayBirthdaysGrouped() {
    const birthdayGroupsContainer = document.getElementById("birthdayGroups");
    if (!birthdayGroupsContainer) {
        return;
    }

    const { groupedByMonth, unknownBirthdays } = getBirthdayGroups();
    birthdayGroupsContainer.innerHTML = "";

    monthOrder.forEach(month => {
        const days = groupedByMonth.get(month);
        if (!days || days.size === 0) {
            return;
        }

        const monthEntries = [];
        days.forEach((chars, day) => {
            chars.forEach(character => {
                monthEntries.push({ character, day });
            });
        });

        let monthMarkup = `<section class="birthday-month"><h2>${month}</h2><div class="birthday-entries">`;
        monthEntries.forEach(entry => {
            monthMarkup += `
            <div class="birthday-entry">
                ${buildBirthdayFragment(entry.character, `${month} ${entry.day}`)}
            </div>`;
        });
        monthMarkup += "</div>";
        monthMarkup += "</section>";
        birthdayGroupsContainer.insertAdjacentHTML("beforeend", monthMarkup);
    });

    if (unknownBirthdays.length > 0) {
        const unknownValueCards = unknownBirthdays.filter(c => c.bMonth === "Unknown").map(buildCharacterFragment).join("");
        const tbdOrNoneCards = unknownBirthdays.filter(c => c.bMonth === "TBD" || !c.bMonth).map(buildCharacterFragment).join("");

        if (unknownValueCards.length > 0) {
            const unknownSection = `
        <section class="birthday-month">
            <h2>N/A</h2>
            <div class="characters birthday-characters">${unknownValueCards}</div>
        </section>`;
            birthdayGroupsContainer.insertAdjacentHTML("beforeend", unknownSection);
        }

        if (tbdOrNoneCards.length > 0) {
            const tbdSection = `
        <section class="birthday-month">
            <h2>No Date (yet?)</h2>
            <div class="characters birthday-characters">${tbdOrNoneCards}</div>
        </section>`;
            birthdayGroupsContainer.insertAdjacentHTML("beforeend", tbdSection);
        }
    }

    initializePopovers();
}

function formatGalleryLabel(imagePath) {
    const fileName = imagePath.split('/').pop() || imagePath;
    const decodedName = decodeURIComponent(fileName).replace(/\.webp$/i, '');
    const normalizedName = decodedName.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
    const words = normalizedName.split(' ').filter(Boolean);

    if (words.length <= 1) {
        return normalizedName;
    }

    return words.slice(1).join(' ');
}

function normalizeGalleryImagePath(href) {
    const cleanHref = decodeURIComponent(href.split('#')[0].split('?')[0].trim()).replace(/\\/g, '/');

    if (!cleanHref) {
        return '';
    }

    if (/^https?:\/\//i.test(cleanHref)) {
        const url = new URL(cleanHref);
        return url.pathname.replace(/^\/+/, '');
    }

    if (cleanHref.startsWith('/')) {
        return cleanHref.replace(/^\/+/, '');
    }

    if (cleanHref.startsWith('images/gallery/')) {
        return cleanHref;
    }

    return `images/gallery/${cleanHref.replace(/^\.\//, '')}`;
}

async function fetchGalleryDirectoryImages() {
    try {
        const response = await fetch('images/gallery/', { cache: 'no-store' });
        if (!response.ok) {
            return [];
        }

        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('text/html') && !contentType.includes('text/plain')) {
            return [];
        }

        const markup = await response.text();
        const parsed = new DOMParser().parseFromString(markup, 'text/html');
        const imagePaths = [...parsed.querySelectorAll('a[href]')]
            .map(link => link.getAttribute('href') || '')
            .filter(href => /\.webp(?:[?#].*)?$/i.test(href))
            .map(normalizeGalleryImagePath);

        return [...new Set(imagePaths)].sort((left, right) => left.localeCompare(right));
    } catch (_error) {
        return [];
    }
}

async function fetchGalleryManifestImages() {
    try {
        const manifestUrl = `images/gallery/gallery-manifest.json?v=${Date.now()}`;
        const response = await fetch(manifestUrl, { cache: 'no-store' });
        if (!response.ok) {
            return [];
        }

        const payload = await response.json();
        if (!Array.isArray(payload.images)) {
            return [];
        }

        return payload.images
            .filter(imagePath => /\.webp$/i.test(imagePath))
            .map(normalizeGalleryImagePath)
            .sort((left, right) => left.localeCompare(right));
    } catch (_error) {
        return [];
    }
}

function buildGalleryFragment(imagePath) {
    const label = formatGalleryLabel(imagePath);
    const safeSrc = escapeHtml(encodeURI(imagePath));
    const safeLabel = escapeHtml(label);

    return `
    <figure class="gallery-card">
        <img src="${safeSrc}" alt="${safeLabel}" loading="lazy">
        <figcaption>${safeLabel}</figcaption>
    </figure>`;
}

async function displayGalleryImages() {
    if (!galleryContainer) {
        return;
    }

    galleryContainer.innerHTML = '<p class="gallery-status">Loading gallery...</p>';

    const [directoryImages, manifestImages] = await Promise.all([
        fetchGalleryDirectoryImages(),
        fetchGalleryManifestImages(),
    ]);

    const imagePaths = [...new Set([...directoryImages, ...manifestImages])]
        .sort((left, right) => left.localeCompare(right));

    if (imagePaths.length === 0) {
        galleryContainer.innerHTML = '<p class="gallery-status">No gallery images found.</p>';
        return;
    }

    galleryContainer.innerHTML = imagePaths.map(buildGalleryFragment).join('');
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
    if (!sidebar) {
        return;
    }

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

if (charactersContainer && searchInput && filterButtons.length > 0) {
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

            if (button.dataset.category == "LSH") {
                document.querySelectorAll('.filters button.pressed[data-category="LSE"]').forEach(button => button.classList.remove('pressed'));
            }
            if (button.dataset.category == "LSE") {
                document.querySelectorAll('.filters button.pressed[data-category="LSH"]').forEach(button => button.classList.remove('pressed'));
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
}

displayGalleryImages();

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function DropBtn() {
  document.getElementById("PagesDropBtn").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




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

// Load the initial content when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('content-container') && typeof loadContent === 'function') {
        loadContent('home');
    }

    displayBirthdaysGrouped();
});