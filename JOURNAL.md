# Journal de bord

Nom et prénom : Yael Castan Gleizes
Dépôt : https://github.com/yael-crea/jeu-ia-
Outil utilisé (Copilot, modèle affiché) : GitHub Copilot, Copilot Fusion (GPT-5.6 Luna)

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
(colle-le ici)
```

- Une affirmation de la réponse que j'ai vérifiée :
- Comment je l'ai vérifiée (un changement dans le code, un test dans le jeu) :
- Résultat : exacte, fausse ou incomplète :

## Défi 3 - Plan

- Mon prompt en mode Plan :

```
(colle-le ici)
```

- Le plan est dans le fichier `PLAN.md`.
- Ce que j'ai changé dans le plan avant de le valider (étape retirée, ajoutée, contrainte) et pourquoi :

## Défi 4 - Agent

- Mon prompt en mode Agent :

```
(colle-le ici)
```

- Fichiers que l'agent a modifiés :
- Ce que j'ai relu dans les changements avant d'accepter :
- Ce que j'ai refusé, corrigé ou fait refaire :
- Mon jeu après l'agent (une phrase) :

## Défi 5 - Pull request et revue

- Lien de ma pull request :
- Commentaire de la revue Copilot que j'ai traité (le texte) :
- Ma décision (corrigé ou refusé) et pourquoi :
- Lien de mon jeu publié :

## Bilan (3 lignes maximum)

- Ce que l'assistant a fait mieux ou plus vite que moi :
- Ce qu'il a mal fait ou ce que j'ai dû corriger :
- Ce que je ne lui laisserais pas faire :
