# Journal de bord

Nom et prénom : Yael Castan Gleizes
Dépôt : https://github.com/yael-crea/jeu-ia-
Outil utilisé (Copilot, modèle affiché) : GitHub Copilot, Copilot Fusion (GPT-5.6 Luna) pour les défis 1 et 2 ; Claude Code pour les défis 3 à 5, mes crédits Copilot étant épuisés (voir la pull request).

Règle : tu colles ici le texte exact de tes prompts (copier-coller, pas de capture). Une entrée par défi. Ce que tu n'as pas gardé compte autant que ce que tu as gardé.

## Défi 1 - Complétion

- Commentaire ou début de code que j'ai écrit :

```
// compte les cristaux attrapés dans la variable cristaux
// nombre de cristaux attrapés pendant la partie
// remet les cristaux à zéro
// affiche le nombre de cristaux attrapés sur l'écran de fin
```

- Ce que Copilot a proposé : `if (objet.type === CRISTAL) { cristaux += 1; }`, puis `let cristaux = 0;` en haut du fichier et `cristaux = 0;` dans demarrerPartie.
- Ce que j'ai accepté, modifié ou refusé, et pourquoi : j'ai accepté. Copilot ne compte que les cristaux normaux, pas les dorés : je le garde, les dorés sont un bonus à part. Sa première proposition était incomplète : la variable n'était pas déclarée et le jeu plantait (`Uncaught ReferenceError: cristaux is not defined`). D'où les deux commentaires suivants. L'écran de fin n'avait pas d'emplacement pour le nombre : une ligne `fin-cristaux` a été ajoutée dans index.html.
- Comment j'ai vérifié que ça marche : l'erreur a disparu de la console (F12). Après 4 cristaux attrapés, l'écran de fin affiche 4, et le compteur repart à 0 à la partie suivante.

## Défi 2 - Ask

- Ma question (prompt exact) :

```
Je suis en Bachelor 1, j'ai fait un peu de Go. Explique jeu.js : comment fonctionnent la boucle du jeu, la chute des objets et la détection de l'objet attrapé ? Une phrase par partie.
```

Deuxième question :

```
Comment le combo est-il remis à zéro dans jeu.js ?
```

Réponse de Copilot : trois cas. Quand le panier rate un cristal ou touche une bombe, quand le délai de combo de 3 secondes expire, et au démarrage d'une partie.

- Une affirmation de la réponse que j'ai vérifiée : « Quand le panier rate un cristal ou touche une bombe : combo = 0 et chronoCombo = 0. »
- Comment je l'ai vérifiée (un changement dans le code, un test dans le jeu) : test dans le jeu. Après 4 cristaux attrapés, le multiplicateur passe à x2 ; un cristal raté fait perdre une vie et le multiplicateur revient à x1.
- Résultat : exacte. Copilot ne dit pas que rater un cristal doré ne remet pas le combo à zéro.

## Défi 3 - Plan

- Mon prompt en mode Plan :

```
Je veux ajouter un cristal de glace, plus rare que le doré. Quand on l'attrape, tous les objets ralentissent pendant 4 secondes, puis reprennent leur vitesse. Respecte les règles de .github/copilot-instructions.md. Propose un plan sans modifier le code.
```

- Le plan est dans le fichier `PLAN.md`.
- Ce que j'ai changé dans le plan avant de le valider (étape retirée, ajoutée, contrainte) et pourquoi :
  - ajouté : durée et force du ralentissement dans `config.js`, comme le demandent les instructions du dépôt ;
  - ajouté : ne pas modifier `objet.vitesse`, seulement multiplier le déplacement, sinon un objet créé pendant le gel resterait lent ;
  - retiré : un son dédié et des particules, non demandés, alors que le JavaScript dépasse déjà 600 lignes ;
  - ajouté : la glace ne compte pas dans `cristaux`, pour ne pas casser le défi 1 ;
  - ajouté : une section « Comment vérifier dans le jeu ».

## Défi 4 - Agent

- Mon prompt en mode Agent :

```
tu peut tout me faire
```

(envoyé avec le sujet du cours ; l'agent a appliqué `PLAN.md`, puis le bouclier et le thème décrits au défi 4)

- Fichiers que l'agent a modifiés : `config.js`, `jeu.js`, `dessin.js` (glace) ; puis `index.html`, `style.css` et `.github/copilot-instructions.md` (bouclier, thème « Pluie d'Étoiles », deux lignes de règles).
- Ce que j'ai relu dans les changements avant d'accepter : le diff de chaque commit, puis le jeu. Pendant le gel, les objets tombent à 40 % de leur vitesse pendant 4 secondes ; une glace ratée ne coûte pas de vie. Le bouclier apparaît à 10 étoiles, un seul à la fois, et absorbe une météore ; la suivante enlève bien une vie.
- Ce que j'ai refusé, corrigé ou fait refaire : la glace était bleu clair et de la même taille que les étoiles cyan, impossible à distinguer. Je l'ai fait refaire : glace blanche et plus grosse (commit séparé).
- Mon jeu après l'agent (une phrase) : Pluie d'Étoiles, où l'on attrape des étoiles, évite des météores, gagne un bouclier toutes les 10 étoiles et peut geler la pluie avec une étoile de glace.

## Défi 5 - Pull request et revue

- Lien de ma pull request : https://github.com/yael-crea/jeu-ia-/pull/1
- Commentaire de la revue Copilot que j'ai traité (le texte) : « Copilot was unable to review this pull request because the user who requested the review has insufficient remaining quota. » (deux demandes, deux échecs)
- Ma décision (corrigé ou refusé) et pourquoi : j'ai répondu sur la pull request que mes crédits étaient épuisés et ce que j'avais vérifié à la place, puis j'ai fusionné et prévenu le formateur.
- Lien de mon jeu publié : https://yael-crea.github.io/jeu-ia-/

## Bilan (3 lignes maximum)

- Ce que l'assistant a fait mieux ou plus vite que moi : écrire et tester le code de la glace, du bouclier et du thème en quelques minutes.
- Ce qu'il a mal fait ou ce que j'ai dû corriger : Copilot a oublié de déclarer la variable `cristaux` (le jeu plantait) ; la glace était indiscernable des étoiles.
- Ce que je ne lui laisserais pas faire : fusionner ou publier sans que je relise et teste moi-même.
