import React from 'react';
import TeacherCard from './TeacherCard';
import { teachers } from '../../config/teachers';

export default function TeacherGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
}