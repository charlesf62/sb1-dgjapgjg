import React from 'react';
import TeacherHero from '../components/teacher/TeacherHero';
import TeacherGrid from '../components/teacher/TeacherGrid';
import CallToAction from '../components/shared/CallToAction';

export default function Teacher() {
  return (
    <main className="bg-gray-50">
      <TeacherHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TeacherGrid />
        <div className="mt-16">
          <CallToAction />
        </div>
      </div>
    </main>
  );
}