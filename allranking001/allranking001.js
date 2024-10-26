// Liste des cases avec titres et images
const cases = [
    { title: '3D softwares', image: '../images/social-media.jpe', link: '../ranking/3Dsoftware.html' },
    { title: 'Social Media', image: '../images/social-media.jpeg', link: '../ranking/social-media.html' },
    { title: 'Movies', image: 'image3.jpg', link: '../ranking/movies.html' },
    { title: 'chrome extensions', image: 'image3.jpg', link: '../ranking/chrome-extensions.html' },
    { title: 'Classement 3', image: 'image3.jpg', link: 'classement3.html' },
    { title: 'Classement 4', image: 'image4.jpg', link: 'classement4.html' },
    { title: 'Classement 5', image: 'image5.jpg', link: 'classement5.html' }
];

// Fonction pour mélanger les cases de manière aléatoire
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fonction pour afficher les cases mélangées
function displayCases() {
    const container = document.getElementById('box-container');
    container.innerHTML = ''; // Vider le conteneur avant de l'afficher
    shuffle(cases).forEach(item => {
        const caseElement = document.createElement('a');
        caseElement.href = item.link;
        caseElement.className = 'case';
        caseElement.style.backgroundImage = `url(${item.image})`;
        caseElement.innerHTML = `
            <div class="case-title">
                <h2>${item.title}</h2>
            </div>
        `;
        container.appendChild(caseElement);
    });
}

// Afficher les cases au chargement de la page
window.onload = displayCases;

// Fonction pour filtrer les cases par titre avec la barre de recherche
function filterBoxes() {
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    const caseElements = document.querySelectorAll('.case');
    
    caseElements.forEach((caseElement, index) => {
        const title = cases[index].title.toLowerCase();
        if (title.includes(searchTerm)) {
            caseElement.style.display = 'block';
        } else {
            caseElement.style.display = 'none';
        }
    });
}
