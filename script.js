const products = [
    { imageURL: "images/aaron.png", name: "Aaron", categories: ["Human", "Male", "Night", "Runes", "Gang"] },
    { imageURL: "images/alyssa.png", name: "Alyssa", categories: ["Human", "Female", "Dj", "Runes", "Others"] },
    { imageURL: "images/amy.png", name: "Amy", categories: ["Human", "Female", "Night", "Runes", "Gang"] },
    { imageURL: "images/ash.png", name: "Ash", categories: ["Human", "Male", "Dj", "Runes", "Others"] },
    { imageURL: "images/ayumi.png", name: "Ayumi", categories: ["Human", "Female", "Night", "Runes", "Others"] },
    { imageURL: "images/azure.png", name: "Azure", categories: ["Human", "Female", "Night", "Runes", "Gang", "Others"] },
    { imageURL: "images/boss.png", name: "Boss", categories: ["Human", "Male", "Dj", "Runes", "Gang"] },
    { imageURL: "images/cara.png", name: "Cara", categories: ["Human", "Female", "Night", "Runes", "Gang"] },
    { imageURL: "images/cassie.png", name: "Cassie", categories: ["Human", "Female", "Night", "Runes", "Gang"] },
    { imageURL: "images/cherry.png", name: "Cherry", categories: ["Hybrid", "Female", "Night", "LS", "LSE"] },
    { imageURL: "images/daphne.png", name: "Daphne", categories: ["Human", "Female", "Night", "LS", "LSH"] },
    { imageURL: "images/dj.png", name: "Dj", categories: ["Human", "Male", "Dj", "Runes", "Gang"] },
    { imageURL: "images/dom.png", name: "Dom", categories: ["Human", "Male", "Dj", "Runes", "Cops"] },
    { imageURL: "images/dorothea.png", name: "Dorothea", categories: ["Human", "Female", "Night", "Runes", "Gang"] },
    { imageURL: "images/ela.png", name: "Ela", categories: ["Human", "Female", "Dj", "Runes", "Cops"] },
    { imageURL: "images/eleanor.png", name: "Eleanor", categories: ["Human", "Female", "Night", "Runes", "Others"] },
    { imageURL: "images/ember.png", name: "Ember", categories: ["Human", "Female", "Night", "Runes", "Cops", "Others"] },
    { imageURL: "images/fc25.png", name: "FC25", categories: ["Human", "Female", "Night", "Runes", "Gang", "Others"] },
    { imageURL: "images/fukure.png", name: "Fukure", categories: ["Human", "Male", "Dj", "Runes", "Cops"] },
    { imageURL: "images/gabriel.png", name: "Gabriel", categories: ["Human", "Male", "Dj", "Runes", "Others"] },
    { imageURL: "images/gwen.png", name: "Gwen", categories: ["Human", "Female", "Night", "Runes", "Gang"] },
    { imageURL: "images/iris.png", name: "Iris", categories: ["Human", "Female", "Night", "Runes", "envision"] },
    { imageURL: "images/jade.png", name: "Jade", categories: ["Human", "Female", "Night", "Runes", "Others"] },
    { imageURL: "images/kaelani.png", name: "Kaelani", categories: ["Hybrid", "Female", "Night", "LS", "LSE"] },
    { imageURL: "images/kenzie.png", name: "Kenzie", categories: ["Human", "Female", "Night", "Runes", "Others"] },
    { imageURL: "images/kiko.png", name: "Kiko", categories: ["Human", "Female", "Night", "Runes", "Gang", "Others"] },
    { imageURL: "images/kishi.png", name: "Kishi", categories: ["Human", "Female", "Night", "Runes", "Gang"] },
    { imageURL: "images/kyra.png", name: "Kyra", categories: ["Human", "Female", "Night", "Runes", "Gang", "Others"] },
    { imageURL: "images/lilou.png", name: "Lilou", categories: ["Human", "Female", "Night", "Runes", "Others"] },
    { imageURL: "images/lisy.png", name: "Lisy", categories: ["Human", "Female", "Night", "Runes", "Cops"] },
    { imageURL: "images/liza.png", name: "Liza", categories: ["Human", "Female", "Dj", "Runes", "envision"]},
    { imageURL: "images/luna.png", name: "Luna", categories: ["Human", "Female", "Night", "Runes", "Others"] },
    { imageURL: "images/lyra.png", name: "Lyra", categories: ["Hybrid", "Female", "Night", "LS", "LSE"] },
    { imageURL: "images/melissa.jpg", name: "Melissa", categories: ["Hybrid", "Female", "Night", "LS", "LSE"] },
    { imageURL: "images/mika.jpg", name: "Mika", categories: ["Hybrid", "Female", "Night", "LS", "LSE"] },
    { imageURL: "images/mist.png", name: "Mist", categories: ["Hybrid", "Male", "Night", "LS", "LSH"] },
    { imageURL: "images/moon.png", name: "Moon", categories: ["Human", "Female", "Night", "Runes", "Cops"] },
    { imageURL: "images/naiya.png", name: "Naiya", categories: ["Human", "Female", "Night", "Runes", "Gang"] },
    { imageURL: "images/night.png", name: "Night", categories: ["Hybrid", "Female", "Night", "LS", "LSH"] },
    { imageURL: "images/nyx.png", name: "Nyx", categories: ["Hybrid", "Female", "Night", "Runes", "Gang"] },
    { imageURL: "images/oscar.png", name: "Oscar", categories: ["Human", "Male", "Dj", "Runes", "Others"] },
    { imageURL: "images/pandora.png", name: "Pandora", categories: ["Human", "Female", "Night", "Runes", "envision"] },
    { imageURL: "images/penny.png", name: "Penny", categories: ["Human", "Female", "Night", "Runes", "Gang"] },
    { imageURL: "images/rae.png", name: "Rae", categories: ["Human", "Female", "Dj", "Runes", "Others"] },
    { imageURL: "images/riley.png", name: "Riley", categories: ["Human", "Female", "Night", "Runes", "Others"] },
    { imageURL: "images/scarlet.png", name: "Scarlet", categories: ["Human", "Female", "Dj", "Runes", "Cops"] },
    { imageURL: "images/shie.png", name: "Shie", categories: ["Human", "Female", "Night", "Runes", "Cops"] },
    { imageURL: "images/skye.jpg", name: "Skye", categories: ["Hybrid", "Female", "Night", "LS", "LSE"] },
    { imageURL: "images/spectre.png", name: "Spectre", categories: ["Human", "Male", "Dj", "Runes", "envision"] },
    { imageURL: "images/tyler.png", name: "Tyler", categories: ["Human", "Male", "Night", "Runes", "Others"] },
    { imageURL: "images/vanilla.png", name: "Vanilla", categories: ["NonH", "Female", "Night", "Runes", "Gang", "Others"] },
    { imageURL: "images/winter.png", name: "Winter", categories: ["Human", "Female", "Dj", "Runes", "Others"] },
    { imageURL: "images/wendy.png", name: "Wendy", categories: ["Human", "Female", "Night", "Runes", "Others"] },
    { imageURL: "images/redacted.png", name: "[Redacted]", categories: ["Human", "Male", "Dj", "Runes", "Others"] },
];

const productsContainer = document.querySelector('.products');
const searchInput = document.getElementById('searchProduct');
const filterButtons = document.querySelectorAll('.filters button');

function displayProducts(productsArray) {
    productsContainer.innerHTML = "";
    productsArray.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <p>${product.name}</p>
        `;
        productsContainer.appendChild(productElement);
    });
}

function filterProducts() {
    let pressedButtons = Array.from(document.querySelectorAll('.filters button.pressed'));
    let filteredProducts = products;

    let showAll = pressedButtons.length == 0 || pressedButtons[0].dataset.category == "all";

    if (!showAll) {
        let categories = pressedButtons.map(button => button.dataset.category);
        filteredProducts = products.filter(product => categories.every(category => product.categories.includes(category)));
    }
    filteredProducts = searchProducts(filteredProducts);
    displayProducts(filteredProducts);
}

function searchProducts(productsArray) {
    const searchText = searchInput.value.toLowerCase();
    return productsArray.filter(product => product.name.toLowerCase().includes(searchText));
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
        filterProducts();
    });
});

searchInput.addEventListener('input', () => {
    filterProducts();
});

displayProducts(products);