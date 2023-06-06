document.getElementById("ajouter").addEventListener("click", function(e) {
    e.preventDefault()
    const nom = document.getElementById("nom")
    const prenom = document.getElementById("prenom")
    const nomStocker = nom.value;
    const prenomStocker = prenom.value;
    const li = document.createElement("li");
    // li.innerHTML = prenomStocker + " " + nomStocker;
    li.innerHTML = `${prenomStocker} ${nomStocker}`
    const ul = document.getElementById("myList")
    ul.appendChild(li);
    // clear inputs
    nom.value = "";
    prenom.value = "";
    // Modifier
    const button = document.createElement("button")
    button.textContent = "Modifier";
    li.appendChild(button);
    ul.appendChild(li);
});
// Annuler
document.getElementById("modifier1").addEventListener("click", function(evt) {
    evt.preventDefault()
        //console.log('hello');
    const nom = document.getElementById("nom")
    const prenom = document.getElementById("prenom")
    const nomStocker = nom.value.trim();
    const prenomStocker = prenom.value;
    const newButton = document.createElement("button");
    newButton.textContent = "Annuler";
    const form = document.getElementById("form");
    form.appendChild(newButton);
    //return to these places    
    document.getElementById("nom").value = nomStocker;
    console.log('nomStocker', nomStocker);
    document.getElementById("prenom").value = prenomStocker;
})