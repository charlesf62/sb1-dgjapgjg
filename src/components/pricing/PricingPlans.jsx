import React from 'react';
import { pricingPlans } from '../../config/pricingPlans';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function PricingPlans() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {pricingPlans.map((plan) => (
        <div
          key={plan.name}
          className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          {plan.popular && (
            <div className="absolute -top-4 right-8 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
              Populaire
            </div>
          )}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
            <p className="mt-2 text-gray-600">{plan.description}</p>
            <p className="mt-4">
              <span className="text-4xl font-bold tracking-tight text-gray-900">
                {plan.price}€
              </span>
              <span className="text-base font-medium text-gray-500">/mois</span>
            </p>
          </div>
          <ul className="space-y-4 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <CheckIcon className="h-6 w-6 flex-shrink-0 text-blue-600" />
                <span className="ml-3 text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={plan.href}
            className={`mt-8 block rounded-md px-4 py-2 text-center text-sm font-semibold ${
              plan.popular
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-gray-50 text-blue-600 hover:bg-gray-100'
            }`}
          >
            Commencer maintenant
          </a>
        </div>
      ))}
    </div>
  );
}