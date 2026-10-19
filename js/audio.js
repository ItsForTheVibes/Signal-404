
document.addEventListener("DOMContentLoaded", function () {
    const boutonSon = document.createElement("button");
    boutonSon.className = "bouton-son";
    document.body.appendChild(boutonSon);

    const sons = {
        message: new Audio("audio/message.mp3"),
        alerte: new Audio("audio/alerte.mp3"),
        decision: new Audio("audio/decision.mp3")
    };

    let sonActif = localStorage.getItem("signal404_son") === "on";

    function actualiserBouton() {
        boutonSon.textContent = sonActif ? "♪ SON ON" : "♪ SON OFF";
        boutonSon.setAttribute("aria-pressed", String(sonActif));
    }

    function jouerSon(nom) {
        if (!sonActif) {
            return;
        }

        const son = sons[nom];
        son.currentTime = 0;
        son.play().catch(function () {
            // Le navigateur peut bloquer la lecture.
        });
    }

    actualiserBouton();

    boutonSon.addEventListener("click", function () {
        sonActif = !sonActif;
        localStorage.setItem("signal404_son", sonActif ? "on" : "off");
        actualiserBouton();

        if (sonActif) {
            jouerSon("message");
        }
    });

    document.querySelectorAll("a.btn").forEach(function (lien) {
        lien.addEventListener("click", function (event) {
            if (!sonActif || event.ctrlKey || event.metaKey || event.shiftKey) {
                return;
            }

            event.preventDefault();

            const destination = lien.href;
            jouerSon("decision");

            setTimeout(function () {
                window.location.href = destination;
            }, 180);
        });
    });

    document.querySelectorAll(".terminal, .log").forEach(function (element) {
        element.addEventListener("click", function () {
            jouerSon("message");
        });
    });

    document.querySelectorAll(".alerte-sonore").forEach(function (element) {
        element.addEventListener("click", function () {
            jouerSon("alerte");
        });
    });
});
