/**
 * Calcule le temps de lecture estimé d'un texte
 * @param content Le contenu textuel (markdown ou HTML)
 * @param wordsPerMinute Vitesse de lecture (par défaut 200 mots/min)
 * @returns Temps de lecture en minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): number {
  // Nettoyer le contenu : supprimer les balises HTML, le markdown, etc.
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Supprimer les balises HTML
    .replace(/[#*_~`\[\]]/g, '') // Supprimer les caractères markdown
    .replace(/!\[.*?\]\(.*?\)/g, '') // Supprimer les images
    .replace(/\[.*?\]\(.*?\)/g, '') // Supprimer les liens
    .trim();

  // Compter les mots (séparés par des espaces)
  const words = cleanContent.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Calculer le temps de lecture (minimum 1 minute)
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, minutes);
}

/**
 * Formate le temps de lecture pour l'affichage
 * @param minutes Nombre de minutes
 * @returns Chaîne formatée (ex: "5 min")
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min`;
}
