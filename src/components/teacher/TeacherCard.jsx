import React from 'react';
import Badge from '../shared/Badge';

export default function TeacherCard({ teacher }) {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg transition-transform hover:scale-[1.02]">
      <div className="relative h-96">
        <img
          className="w-full h-full object-cover"
          src={teacher.image}
          alt={teacher.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold">{teacher.name}</h3>
          <p className="text-lg text-blue-200">{teacher.role}</p>
        </div>
      </div>
      <div className="p-8">
        <p className="text-gray-600 mb-6">{teacher.bio}</p>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Spécialités</h4>
            <div className="flex flex-wrap gap-2">
              {teacher.specialties.map((specialty) => (
                <Badge key={specialty} color="blue">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900">Formation</h4>
              <p className="text-gray-600 mt-1">{teacher.education}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Expérience</h4>
              <p className="text-gray-600 mt-1">{teacher.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}