document.getElementById("ajouter").addEventListener("click", function(e) {
    e.preventDefault()
    let nom = document.getElementById("nom")
    let nomStocker = nom.value;
    let prenom = document.getElementById("prenom")
    let prenomStocker = prenom.value;
    //console.log('nomStocker', nomStocker);
    //console.log('prenomStocker', prenomStocker);
    const li = document.createElement("li");
    li.innerHTML = prenomStocker + " " + nomStocker;
    const ul = document.getElementById("myList")
    ul.appendChild(li);
});