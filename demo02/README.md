# StudiUM-GPT : démo 02

## Description
Pour détecter les tricheurs, rien de mieux que d'essayer d'en être un soi-même.

Cette démo permet d'obtenir une réponse provenant de ChatGPT d'une manière la plus discrète possible : elle repose sur une extension de navigateur associée à un serveur web Node.js qui fera le dialogue avec ChatGPT via son API.

## Utilisation
1.  On sélectionne un texte dans le navigateur, par exemple une question dans StudiUM. On exécute le script avec un raccourci clavier (CTRL+G).
2.  Le texte sélectionné est envoyé au serveur web Node.js, qui va la transmettre à ChatGPT.
3.  ChatGPT répond, et le serveur Node.js, retourne le résultat au navigateur web.
4.  La réponse s’affiche en popup dans le navigateur (pour l'illustration, mais il est possible de désactiver ce comportement) et est envoyée dans le presse-papier pour coller la réponse directement.

## Prérequis
* [Tampermonkey](https://www.tampermonkey.net/) (testé avec la version 4.18.1 dans Chrome).
* [Node.js](https://nodejs.org) (testé avec la version 18.15 Windows) et la librairie [`openia`](https://github.com/openai/openai-node).

## Installation et configuration
1. Installer le script Tampermonkey.
   Au besoin, configurer l'adresse du serveur web Node.JS.
2. Exécuter le serveur web Node.js.
   Pour la démonstration, il est possible d'exécuter Node.JS sur le même ordinateur que celui sur lequel est exécuté le navigateur (mais ce n'est pas très discret en contexte réel de triche!).
   . Configurer la clé et l'URL de l'API utilisées pour communiquer avec ChatGPT.
   . Au besoin, revoir la configuration du modèle de langage utilisé.

## Démonstration
[Vidéo de démonstration](https://udemontreal-my.sharepoint.com/:v:/r/personal/arnaud_dalayer_umontreal_ca/Documents/Partages/Stream/StudiUM-GPT.mp4?csf=1&web=1&e=WJa0Pu)

## Comment empêcher l'utilisation d'un tel système?
Plusieurs solutions existent :
. Utiliser un environnement contrôlé comme un laboratoire d'informatique dans lequel l'installation d'extensions dans les navigateurs est désactivée (par exemple via GPO).
. Ou contrôler l'accès à Internet comme avec NetSupport School, ou utilisation d'un environnement sécurisé comme SafeExamBrowser : voir [guide de sécurisation des examens donnés dans les laboratoires de l'EBSI](https://wiki.umontreal.ca/pages/viewpage.action?pageId=252159139).
