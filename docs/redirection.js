function telechargerDossier() {
    // URL du fichier ZIP du dossier
    const url = '../dunloads/redirection#reels#shorts.zip';

    // Création d'un élément de lien temporaire
    const lien = document.createElement('a');
    lien.href = url;
    lien.download = 'dossier.zip'; // nom du fichier téléchargé
    document.body.appendChild(lien);

    // Déclenchement du téléchargement
    lien.click();

    // Suppression de l'élément de lien temporaire
    document.body.removeChild(lien);
}