/**
 * Utilitaires pour le scroll sécurisé et compatible
 * Gère les problèmes de compatibilité navigateurs pour window.scrollTo
 */

// Fonction scrollTo sécurisée avec vérifications de compatibilité
export const safeScrollTo = (options) => {
  // Vérification que window existe (pour éviter les erreurs SSR)
  if (typeof window === 'undefined') {
    console.warn('safeScrollTo: window is not available');
    return;
  }

  // Vérification que scrollTo existe et est une fonction
  if (typeof window.scrollTo !== 'function') {
    console.warn('safeScrollTo: window.scrollTo is not a function, using fallback');

    // Fallback pour les navigateurs très anciens
    if (typeof window.scroll === 'function') {
      window.scroll(options.left || 0, options.top || 0);
    } else {
      // Dernier recours : scroll direct sur documentElement ou body
      const scrollElement = document.documentElement || document.body;
      scrollElement.scrollTop = options.top || 0;
      scrollElement.scrollLeft = options.left || 0;
    }
    return;
  }

  // Utilisation de la syntaxe moderne avec objet d'options
  try {
    window.scrollTo({
      top: options.top || 0,
      left: options.left || 0,
      behavior: options.behavior || 'smooth'
    });
  } catch (error) {
    console.warn('safeScrollTo: Error using scrollTo with options, falling back to basic scroll');
    // Fallback en cas d'erreur
    window.scrollTo(options.left || 0, options.top || 0);
  }
};

// Fonction pour scroller vers un élément avec vérifications
export const safeScrollToElement = (elementId, options = {}) => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.warn(`safeScrollToElement: Element with id "${elementId}" not found`);
    return;
  }

  // Vérification que scrollIntoView existe
  if (typeof element.scrollIntoView === 'function') {
    element.scrollIntoView({
      behavior: options.behavior || 'smooth',
      block: options.block || 'start',
      inline: options.inline || 'nearest'
    });
  } else {
    // Fallback : calcul manuel de la position et scroll
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    safeScrollTo({
      top: elementTop - (options.offset || 0),
      behavior: options.behavior || 'smooth'
    });
  }
};

// Fonction pour obtenir la position de scroll actuelle de manière sécurisée
export const getSafeScrollY = () => {
  if (typeof window === 'undefined') return 0;

  return window.pageYOffset ||
         (document.documentElement && document.documentElement.scrollTop) ||
         (document.body && document.body.scrollTop) ||
         0;
};

// Fonction pour scroller vers le haut de manière sécurisée
export const scrollToTop = (behavior = 'smooth') => {
  safeScrollTo({
    top: 0,
    left: 0,
    behavior
  });
};

// Hook React pour un scroll sécurisé (si nécessaire plus tard)
export const useSafeScroll = () => {
  return {
    scrollTo: safeScrollTo,
    scrollToElement: safeScrollToElement,
    scrollToTop,
    getScrollY: getSafeScrollY
  };
};
