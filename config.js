// Réglages de Pluie d'Étoiles.
// Modifie ces valeurs pour équilibrer le jeu sans toucher au reste du code.

const LARGEUR = 480; // largeur logique du canvas
const HAUTEUR = 720; // hauteur logique du canvas

// Types d'objets qui tombent.
const CRISTAL = "cristal";
const BOMBE = "bombe";
const DORE = "dore";
const GLACE = "glace";

const COULEURS = {
  fond: "#030817",
  cyan: "#28f0ff",
  magenta: "#ff8a3d",
  or: "#ffd166",
  glace: "#a8eaff",
  rouge: "#ff4d6d",
  blanc: "#f5f7ff",
  grille: "rgba(40, 240, 255, 0.16)"
};

const REGLAGES = {
  viesDepart: 3,
  vitessePanier: 560,    // pixels par seconde au clavier
  vitesseChute: 145,     // vitesse du premier niveau
  vitesseChuteMax: 430,
  intervalleObjet: 0.95, // secondes entre deux objets
  intervalleMin: 0.34,
  dureeNiveau: 18,       // secondes avant d'accélérer
  dureeCombo: 3,         // secondes pour enchaîner
  multiplicateurMax: 5,
  etoilesBouclier: 10,   // étoiles à attraper pour gagner un bouclier
  hasardBombe: 0.14,
  hasardDore: 0.05,
  hasardGlace: 0.03,     // plus rare que le doré
  dureeGlace: 4,         // secondes de ralentissement
  ralentiGlace: 0.4,     // vitesse de chute pendant le gel
  largeurPanier: 96,
  hauteurPanier: 16,
  margePanier: 12
};

const CLE_RECORD = "pluieDeNeonRecord";
