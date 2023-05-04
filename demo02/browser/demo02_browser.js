// ==UserScript==
// @name         Démo 02 : Envoyer une question à ChatGPT
// @namespace    https://github.com/arnauddalayer/studiUM-GPT/demo02
// @version      1.0
// @description  Envoyer le texte surligné (idéalement une question) à ChatGPT pour obtenir sa réponse
// @author       Arnaud d'Alayer
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // Fonction qui récupère le texte sélectionné
    function getSelectedText() {
        return window.getSelection().toString().trim();
    }

    // Fonction qui affiche le texte sélectionné
    function showSelectedText(selectedText) {
        alert(selectedText);
    }

    // Fonction qui expédie le texte sélectionné au serveur web Node.JS
    function sendSelectedText(selectedText) {
        const data = JSON.stringify({text: selectedText});
        console.log(`Envoi des données suivantes au serveur : ${data}`);
        //Expédition de la question
        GM_xmlhttpRequest({
            method: "POST",
            url: "http://localhost:8111/",
            data: JSON.stringify({text: selectedText}),
            headers: {
                "Content-Type": "application/json"
            },
            //Réception de la réponse
            onload: function(response) {
                const result = JSON.parse(response.responseText).message;
                alert(result);
                navigator.clipboard.writeText(result);
            }
        });
    }

    // Déclenchement de la fonction getSelectedText() lors de l'appui sur Ctrl+G
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'g') {
            //
            var selectedText = getSelectedText();
            if (selectedText.length > 0) {
                sendSelectedText(selectedText);
                //showSelectedText(selectedText);
            }
        }
    });
})();