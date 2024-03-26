$(document).ready(function () {
    $("#envoi").on("click", function () {
        validate();
    });

    function validate() {
        var selectedPizza = $("input[name='pizza']:checked").val();
        var quantityPizza = $("#quantitePizza").val();
        var extraOil = $("#huile").is(":checked") ? "Oui" : "Non";
        var selectedDrink = $("input[name='boisson']:checked").val();
        var quantityDrink = $("#quantiteBoisson").val();
        var comments = $("#commentaires").val();
        var name = $("#nom").val();
        var phone = $("#telephone").val();
        var address = $("#adresse").val();
        var email = $("#email").val();
        
        if (!selectedPizza) {
            alert('Veuillez choisir une pizza.');
        }
            
        if (!quantityPizza) {
            alert('Veuillez choisir un nombre de pizzas.');
        }
            
        if (!selectedDrink) {
            alert('Veuillez choisir une boisson.');
        }
            
        if (!quantityDrink) {
            alert('Veuillez choisir un nombre de boissons.');
        }
            
        if (!name) {
            alert('Veuillez entrer votre nom.');
        }
            
        if (!phone) {
            alert('Veuillez entrer un numéro de téléphone.');
        }
            
        if (!address) {
            alert('Veuillez entrer une adresse.');
        }
            
        var message = "Récapitulatif de votre commande :\n\n";
        message += "Pizza : " + selectedPizza + "\n";
        message += "Nombre de pizzas : " + quantityPizza + "\n";
        message += "Supplément d'huile : " + extraOil + "\n";
        message += "Boisson : " + selectedDrink + "\n";
        message += "Nombre de boissons : " + quantityDrink + "\n";
        message += "Commentaires : " + comments + "\n\n";
        message += "Vos coordonnées :\n";
        message += "Nom : " + name + "\n";
        message += "Téléphone : " + phone + "\n";
        message += "Adresse : " + address + "\n";
        message += "Email : " + email;

        alert(message);
    }
});