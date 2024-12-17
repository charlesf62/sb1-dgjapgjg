export const pricingPlans = [
  {
    name: 'Débutant',
    description: 'Parfait pour commencer votre apprentissage du français',
    price: 29,
    features: [
      '1 cours particulier par semaine',
      'Accès aux ressources de base',
      'Exercices de grammaire',
      'Support par email',
    ],
    href: '/signup?plan=starter',
    popular: false,
  },
  {
    name: 'Intensif',
    description: 'Pour progresser rapidement en français',
    price: 79,
    features: [
      '3 cours particuliers par semaine',
      'Accès à toutes les ressources',
      'Exercices personnalisés',
      'Support prioritaire',
      'Conversation avec des natifs',
    ],
    href: '/signup?plan=intensive',
    popular: true,
  },
  {
    name: 'Pro',
    description: 'Solution complète pour une maîtrise parfaite',
    price: 149,
    features: [
      'Cours illimités',
      'Ressources premium',
      'Coaching personnalisé',
      'Support 24/7',
      'Certification incluse',
      'Accès aux événements',
    ],
    href: '/signup?plan=pro',
    popular: false,
  },
];