import React from 'react';
import PricingPlans from '../components/pricing/PricingPlans';
import PricingFAQ from '../components/pricing/PricingFAQ';
import CallToAction from '../components/shared/CallToAction';

export default function Pricing() {
  return (
    <main className="bg-gray-50">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Tarifs simples et transparents
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choisissez le forfait qui correspond à vos besoins d'apprentissage
          </p>
        </div>
        <PricingPlans />
        <PricingFAQ />
        <CallToAction />
      </div>
    </main>
  );
}