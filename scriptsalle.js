document.addEventListener("DOMContentLoaded", function () {

    let bouton = document.getElementById("chercherSalle");

    bouton.addEventListener("click", function () {

        let objectif = document.getElementById("objectif").value;
        let budget = document.getElementById("budget").value;
        let equipment = document.getElementById("equipment").value;

        let resultat = "";

        // PRIORITÉ BUDGET PREMIUM
        if (budget === "Premium") {
            resultat = "🔥 Elite Club";
        }

        else if (objectif === "Perte de poids") {
            resultat = "🏃 Cardio Center";
        }

        else if (objectif === "Prise de masse") {
            resultat = "💪 Power Gym";
        }

        else if (objectif === "Remise en forme") {
            resultat = "🧘 Fitness Life";
        }

        else {
            resultat = "Aucune salle correspondante";
        }

        document.getElementById("resultat").innerHTML =
            "<h2>Salle recommandée :</h2><p>" + resultat + "</p>";

    });

});
