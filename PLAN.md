# Plan : cristal de glace

Prompt de départ (défi 3) :

> Je veux ajouter un cristal de glace, plus rare que le doré. Quand on l'attrape, tous les objets ralentissent pendant 4 secondes, puis reprennent leur vitesse. Respecte les règles de .github/copilot-instructions.md. Propose un plan sans modifier le code.

Plan rédigé par Claude Code (et pas par le mode Plan de Copilot), puis relu et corrigé avant d'être appliqué.

## Étapes

1. **config.js** : ajouter un type `GLACE = "glace"`, une couleur `COULEURS.glace` (bleu clair) et trois réglages dans `REGLAGES` :
   - `hasardGlace: 0.03` (plus rare que le doré, qui est à 0.05) ;
   - `dureeGlace: 4` (secondes de ralentissement) ;
   - `ralentiGlace: 0.4` (les objets tombent à 40 % de leur vitesse).
2. **jeu.js, état** : ajouter `let chronoGlace = 0;` et le remettre à 0 dans `demarrerPartie`.
3. **jeu.js, creerObjet** : tirer le type glace juste avant le doré, avec `tirage > 1 - REGLAGES.hasardDore - REGLAGES.hasardGlace`, pour qu'il ne prenne pas la place des bombes.
4. **jeu.js, toucherObjet** : si l'objet est de la glace, mettre `chronoGlace = REGLAGES.dureeGlace`, donner 10 points comme un cristal, afficher le texte « GEL » et faire un flash bleu clair. La glace compte dans le combo, mais pas dans le compteur `cristaux` du défi 1.
5. **jeu.js, mettreAJour** : faire baisser `chronoGlace` avec `dt` et multiplier la chute par `REGLAGES.ralentiGlace` tant que `chronoGlace > 0`. La vitesse propre de chaque objet n'est pas modifiée : elle reprend donc toute seule à la fin des 4 secondes.
6. **jeu.js, objet raté** : une glace qui tombe en bas ne fait pas perdre de vie (comme le doré).
7. **dessin.js** : dessiner la glace avec la forme du cristal, en bleu clair, sans nouvelle fonction (on réutilise `dessinerCristal` avec la couleur de la glace).
8. **HUD** : pendant le ralentissement, afficher le temps restant (par exemple « GEL 3 ») dans le bloc du niveau.

## Ce que j'ai changé dans le plan

- **Ajouté** : la durée et la force du ralentissement sont réglées dans `config.js` (règle des instructions Copilot : les réglages restent dans config.js).
- **Ajouté** : on ne modifie pas `objet.vitesse`, on multiplie seulement le déplacement. Sinon, un objet créé pendant le gel garderait une vitesse lente pour toujours, ou un objet ralenti deux fois ne reprendrait jamais sa vitesse.
- **Retiré** : un son dédié dans `audio.js` et des éclats en particules autour de la glace. Ce n'est pas demandé, et le JavaScript fait déjà 609 lignes alors que la règle est « sous 600 ». On réutilise `sonDore()`.
- **Ajouté** : la glace ne compte pas dans `cristaux`, pour ne pas casser le défi 1.

## Comment vérifier dans le jeu

1. Pour tester vite, mettre temporairement `hasardGlace: 0.5` dans `config.js`.
2. Lancer une partie et attraper un cristal bleu clair : le texte « GEL » apparaît et tous les objets tombent nettement plus lentement.
3. Le HUD affiche le compte à rebours, et après 4 secondes les objets reprennent leur vitesse normale.
4. Laisser tomber une glace : on ne perd pas de vie.
5. Vérifier qu'une bombe enlève toujours une vie et que l'écran de fin compte toujours les cristaux.
6. Remettre `hasardGlace: 0.03`, puis lancer `node --check` sur les fichiers modifiés.
