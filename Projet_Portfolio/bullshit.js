console.log("hello")
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Merci pour votre message, " + name + " !");
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});