# Journal de bord

Nom et prénom : Yael Castan Gleizes
Dépôt : https://github.com/yael-crea/jeu-ia-
Outil utilisé (Copilot, modèle affiché) : GitHub Copilot, Copilot Fusion (GPT-5.6 Luna) pour les défis 1 et 2 ; Claude Code (Claude Opus 5.5) pour les défis 3 à 5

Règle : tu colles ici le texte exact de tes prompts (copier-coller, pas de capture). Une entrée par défi. Ce que tu n'as pas gardé compte autant que ce que tu as gardé.

## Défi 1 - Complétion

- Commentaire ou début de code que j'ai écrit :

```
// compte les cristaux attrapés dans la variable cristaux
// nombre de cristaux attrapés pendant la partie
// remet les cristaux à zéro
```

Deuxième demande (écran de fin), faite par Claude Code et pas par la complétion Copilot :

```
// affiche le nombre de cristaux attrapés sur l'écran de fin
```

- Ce que Copilot a proposé : pour le premier commentaire, `if (objet.type === CRISTAL) { cristaux += 1; }`. Pour les deux commentaires suivants : `let cristaux = 0;` en haut du fichier et `cristaux = 0;` dans demarrerPartie.
- Ce que j'ai accepté, modifié ou refusé, et pourquoi : j'ai accepté la première proposition. Elle ne compte que les cristaux normaux, pas les dorés ; je la garde parce que les dorés sont un bonus à part. Mais elle était incomplète : Copilot n'avait pas déclaré la variable, et le jeu plantait dès le premier cristal attrapé (console : `Uncaught ReferenceError: cristaux is not defined`, jeu.js:126). J'ai donc ajouté les deux commentaires pour la déclarer et la remettre à zéro. Pour l'écran de fin, il n'y avait aucun emplacement dans index.html : Claude Code a ajouté une ligne CRISTAUX (`fin-cristaux`) dans index.html et la ligne `finCristaux.textContent = cristaux;` dans terminerPartie.
- Comment j'ai vérifié que ça marche : d'abord l'erreur dans la console (F12), qui a disparu après la déclaration. Puis le jeu a été lancé dans un navigateur par Claude Code : 4 cristaux attrapés, l'écran de fin affiche 4 ; à la partie suivante, le compteur repart à 0 et l'écran de fin affiche 0.

## Défi 2 - Ask

- Ma question (prompt exact) :

```
Je suis en Bachelor 1, j'ai fait un peu de Go. Explique jeu.js : comment fonctionnent la boucle du jeu, la chute des objets et la détection de l'objet attrapé ? Une phrase par partie.
```

Remarque : je l'ai d'abord envoyée en mode Agent par erreur, puis renvoyée en mode Ask. Les deux réponses étaient presque identiques (boucle avec requestAnimationFrame, chute avec `objet.vitesse * dt`, détection avec estAttrape puis toucherObjet).

Deuxième question (prompt exact, mode Ask) :

```
Comment le combo est-il remis à zéro dans jeu.js ?
```

Réponse de Copilot : trois cas. Quand le panier rate un cristal ou touche une bombe (`combo = 0` et `chronoCombo = 0`), quand le délai de combo de 3 secondes expire, et au démarrage d'une nouvelle partie.

- Une affirmation de la réponse que j'ai vérifiée : « Quand le panier rate un cristal ou touche une bombe : combo = 0 et chronoCombo = 0. »
- Comment je l'ai vérifiée (un changement dans le code, un test dans le jeu) : par l'exécution, sans changer le code. Le jeu a été lancé dans le navigateur (test fait par Claude Code, qui a lu les variables du jeu pendant la partie) : après 4 cristaux attrapés, combo = 4 et le HUD affiche x2 ; un cristal laissé tomber hors du panier fait passer les vies de 3 à 2, combo à 0 et le HUD à x1. J'ai aussi relu le code : rater un cristal appelle perdreVie (ligne 187), et perdreVie remet combo et chronoCombo à 0.
- Résultat : exacte. Détail que Copilot ne dit pas : rater un cristal doré ne fait pas perdre de vie et ne remet pas le combo à zéro, il affiche seulement « CRISTAL DORÉ PERDU ».

## Défi 3 - Plan

- Mon prompt en mode Plan :

```
Je veux ajouter un cristal de glace, plus rare que le doré. Quand on l'attrape, tous les objets ralentissent pendant 4 secondes, puis reprennent leur vitesse. Respecte les règles de .github/copilot-instructions.md. Propose un plan sans modifier le code.
```

Ce prompt n'a pas été envoyé au mode Plan de Copilot : à partir du défi 3, j'ai continué avec Claude Code (Claude Opus 5.5), comme le permet le sujet (« Si l'outil ne répond pas »). Ma demande à Claude Code était : « tu peut tout me faire » avec le sujet en PDF. Claude Code a lu le code et rédigé le plan.

- Le plan est dans le fichier `PLAN.md`.
- Ce que j'ai changé dans le plan avant de le valider (étape retirée, ajoutée, contrainte) et pourquoi :
  - ajouté : durée et force du ralentissement dans `config.js`, parce que les instructions Copilot demandent que les réglages restent dans config.js ;
  - ajouté : ne pas modifier `objet.vitesse` mais seulement multiplier le déplacement, sinon un objet créé pendant le gel resterait lent pour toujours ;
  - retiré : un son dédié et des particules autour de la glace, parce que ce n'est pas demandé et que le JavaScript dépasse déjà la limite de 600 lignes (609) ;
  - ajouté : la glace ne compte pas dans `cristaux`, pour ne pas casser le défi 1 ;
  - ajouté : une section « Comment vérifier dans le jeu ».

## Défi 4 - Agent

- Mon prompt en mode Agent :

```
tu peut tout me faire
```

Ce prompt a été envoyé à Claude Code (Claude Opus 5.5), pas au mode Agent de Copilot, avec le sujet en PDF. Claude Code a appliqué `PLAN.md`, puis a ajouté le bouclier et le thème à partir des consignes du sujet (défi 4, étapes 4 et 5). Il n'y a pas eu de deuxième prompt formulé avec objectif, contexte, contraintes et format.

- Fichiers que l'agent a modifiés :
  - cristal de glace : `config.js`, `jeu.js`, `dessin.js` ;
  - bouclier et thème « Pluie d'Étoiles » (espace : étoiles à attraper, météores à éviter, un bouclier toutes les 10 étoiles) : `config.js`, `jeu.js`, `dessin.js`, `index.html`, `style.css`, `.github/copilot-instructions.md` (deux lignes sur le thème et la règle du bouclier).
- Ce que j'ai relu dans les changements avant d'accepter : le diff de chaque commit, puis des tests en lançant le jeu dans le navigateur :
  - glace : la chute passe de 207 à 83 pixels par seconde (40 %) pendant 4 secondes, puis revient à 207 ; le HUD affiche « GEL 4 » ; une glace ratée ne fait pas perdre de vie ; sur 20 000 tirages, 3,1 % de glace contre 4,9 % de doré, donc plus rare ;
  - bouclier : il apparaît à la 10e étoile, un seul à la fois ; la première météore le casse sans perte de vie ; la suivante enlève bien une vie ; il disparaît à la nouvelle partie.
- Ce que j'ai refusé, corrigé ou fait refaire : le cristal de glace était dessiné en bleu clair, presque de la même couleur et de la même taille que les étoiles cyan. Sur une capture du jeu, on ne pouvait pas les distinguer, donc le joueur ne pouvait pas viser la glace exprès. Corrigé dans un commit à part : glace blanche et plus grosse (rayon 17 au lieu de 13).
- Limites : le test « relancer un prompt court et voir si l'agent tient compte de `.github/copilot-instructions.md` » n'a pas été fait, car ce fichier est lu par Copilot, pas par Claude Code. Le JavaScript dépasse maintenant la règle des 600 lignes (le modèle en avait déjà 598).
- Mon jeu après l'agent (une phrase) : Pluie d'Étoiles, où l'on attrape des étoiles, évite des météores, gagne un bouclier toutes les 10 étoiles et peut geler la pluie pendant 4 secondes avec une étoile de glace.

## Défi 5 - Pull request et revue

- Lien de ma pull request :
- Commentaire de la revue Copilot que j'ai traité (le texte) :
- Ma décision (corrigé ou refusé) et pourquoi :
- Lien de mon jeu publié :

## Bilan (3 lignes maximum)

- Ce que l'assistant a fait mieux ou plus vite que moi :
- Ce qu'il a mal fait ou ce que j'ai dû corriger :
- Ce que je ne lui laisserais pas faire :
