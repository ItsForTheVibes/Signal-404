# SIGNAL 404
https://itsforthevibes.github.io/Signal-404/

**SIGNAL 404** est un jeu narratif interactif dans un univers cyberpunk, développé en HTML, CSS et JavaScript.

Le joueur incarne un jeune hacker endetté, contraint de travailler pour une organisation criminelle. Ses décisions influencent le déroulement de l'histoire et déterminent sa fin.

## Histoire

En 2094, une mégalopole est contrôlée par de puissantes mégacorporations.

Après avoir été victime d'une arnaque et contracté une dette impossible à rembourser, le protagoniste est recruté par **ZeroDay.404**, un syndicat de hackers dirigé par le mystérieux **TrojanWolf**.

Sa première mission consiste à voler des fichiers confidentiels. Mais lorsqu'il découvre que ces fichiers contiennent des informations personnelles sur des milliers de citoyens, il doit prendre une décision.

**Obéir, refuser ou mentir ?**

Chaque choix entraîne des conséquences différentes.

## Fonctionnalités

- Histoire interactive avec **3 chemins narratifs**.
- **3 fins différentes** selon les décisions du joueur.
- **15 pages HTML** reliées entre elles.
- Interface inspirée des terminaux informatiques cyberpunk.
- Barre de progression indiquant l'avancement de l'histoire.
- Conversations entre le joueur et les autres personnages.
- Messages système et alertes de sécurité.
- Ambiance sonore et effets audio.
- Bouton **SON ON / SON OFF**.
- Sauvegarde de la préférence sonore avec `localStorage`.
- Interface adaptée aux écrans d'ordinateur et de téléphone.

## Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure des pages et narration |
| CSS3 | Interface, couleurs et animations |
| JavaScript | Gestion des effets sonores |
| Git | Suivi des modifications |
| GitHub | Hébergement du code source |

Le jeu fonctionne directement dans un navigateur, sans installation de bibliothèque externe.

## Installation et lancement

1. Télécharger ou cloner le dépôt GitHub.
2. Ouvrir le dossier du projet dans Visual Studio Code.
3. Ouvrir le fichier `index.html` dans un navigateur.
4. Cliquer sur **INITIALISER LA SESSION** pour commencer l'histoire.

Pour une meilleure compatibilité, il est possible d'utiliser l'extension **Live Server** de Visual Studio Code.

## Structure du projet

```text
Signal-404/
├── index.html
├── mission01.html
├── passe.html
├── decouverte.html
├── obeir.html
├── glitch.html
├── alarme.html
├── fin_ascension.html
├── refuser.html
├── traque.html
├── fin_bouc_emissaire.html
├── mentir.html
├── fuite.html
├── ultimatum.html
├── fin_liberte.html
├── css/
│   └── style.css
├── js/
│   └── audio.js
├── audio/
│   ├