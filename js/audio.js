
document.addEventListener("DOMContentLoaded", function () {
    const boutonSon = document.createElement("button");
    boutonSon.className = "bouton-son";
    document.body.appendChild(boutonSon);

    const sons = {
        ambiance: new Audio("audio/ambiance.mp3"),
        message: new Audio("audio/message.mp3"),
        alerte: new Audio("audio/alerte.mp3"),
        decision: new Audio("audio/decision.mp3")
    };

    sons.ambiance.loop = true;
    sons.ambiance.volume = 0.2;
    sons.message.volume = 0.4;
    sons.alerte.volume = 0.6;
    sons.decision.volume = 0.3;

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

    function demarrerAmbiance() {
        if (sonActif && sons.ambiance.paused) {
            sons.ambiance.play().catch(function () {
                // Un clic peut être nécessaire pour lancer le son.
            });
        }
    }

    actualiserBouton();
    demarrerAmbiance();

    boutonSon.addEventListener("click", function () {
        sonActif = !sonActif;
        localStorage.setItem("signal404_son", sonActif ? "on" : "off");
        actualiserBouton();

        if (sonActif) {
            demarrerAmbiance();
        } else {
            sons.ambiance.pause();
        }
    });

    document.addEventListener("click", function () {
        demarrerAmbiance();
    });

    document.querySelectorAll("a.btn").forEach(function (lien) {
        lien.addEventListener("click", function (event) {
            if (!sonActif || event.ctrlKey || event.metaKey || event.shiftKey) {
                return;
            }

            event.preventDefault();
            jouerSon("decision");

            const destination = lien.href;

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
