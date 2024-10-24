// Script pour le menu déroulant de description
document.querySelectorAll('.toggle-description').forEach(button => {
    button.addEventListener('click', function() {
        const description = this.parentElement.nextElementSibling.nextElementSibling;
        description.style.display = description.style.display === 'none' || description.style.display === '' ? 'block' : 'none';
    });
});
