import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className="mt-20 bg-blue-600 rounded-2xl">
      <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Prêt à commencer votre apprentissage ?
          <br />
          <span className="text-xl font-medium">
            Inscrivez-vous maintenant et obtenez 7 jours d'essai gratuit.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}