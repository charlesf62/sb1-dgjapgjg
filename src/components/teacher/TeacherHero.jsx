import React from 'react';
import SectionTitle from '../shared/SectionTitle';

export default function TeacherHero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Nos Professeurs"
          subtitle="Des professeurs natifs qualifiés et passionnés par l'enseignement du français"
          light
        />
      </div>
    </div>
  );
}