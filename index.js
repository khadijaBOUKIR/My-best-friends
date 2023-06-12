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

    const li = document.getElementById("li1")
    const arr = li.innerHTML.split(' ')
    console.log(li.innerHTML);
    const newButton = document.createElement("button");
    newButton.textContent = "Annuler";
    const form = document.getElementById("form");
    form.appendChild(newButton);
    //return to these places    
    document.getElementById("nom").value = arr[1];
    document.getElementById("prenom").value = arr[0];
    // change textContent for button 
    const myButton = document.getElementById("ajouter")
    myButton.innerHTML = "Modifier";
    // modify the content of li
    const Modifier1 = document.getElementById("modifier1");
    const nom = document.getElementById("nom")
    const prenom = document.getElementById("prenom")

    li.textContent = `${prenomStocker} ${nomStocker}`;

})
document.getElementById("modifier1").addEventListener("click", function() {
    const li = document.getElementById("li1");
    const input = document.getElementById("input1");

    // Get the new content from the input field
    const newContent = input.value;

    // Update the content of the <li> element
    li.textContent = newContent;

    // Clear the input field
    input.value = "";