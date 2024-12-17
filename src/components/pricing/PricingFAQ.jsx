import React from 'react';
import { pricingFAQ } from '../../config/pricingFAQ';

export default function PricingFAQ() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
        Questions fréquentes
      </h2>
      <dl className="mt-8 space-y-6 divide-y divide-gray-200">
        {pricingFAQ.map((faq) => (
          <div key={faq.question} className="pt-6">
            <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
            <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}