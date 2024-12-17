import React from 'react';

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div className="text-center">
      <h2 className={`text-3xl font-bold tracking-tight ${light ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-xl ${light ? 'text-gray-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}