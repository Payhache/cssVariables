
// Selection des inputs de la page :
const inputs = document.querySelectorAll('.controls input');
// Création de la fonction qui va permettre de relever les changement de l'input
function handleUpdate() {
    // ici nous récupérons la valeur de data-sizing (contenu dans la class dataset) pour pouvoir
    // la suffixer plus tard 
    const suffix = this.dataset.sizing || ''; // si il n'y a pas de data renvoie une chaine decaractére vide (pas de px pour la couleur)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
// Création d'une boucle qui va permettre d'avoir un Eventlistener sur chaque
// input. L'evenlistener lancera la fonction handleUpdate à chaque chantement d'état
// ici il prendra en compte le changement de curseur : un peu moins précis
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// ici il prendra en compte le mouvement de la souris : plus précis :
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


