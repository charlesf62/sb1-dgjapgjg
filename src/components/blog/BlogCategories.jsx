import React from 'react';
import { Link } from 'react-router-dom';
import { blogCategories } from '../../config/blogCategories';

export default function BlogCategories() {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-900">Catégories</h2>
      <ul className="mt-4 space-y-4">
        {blogCategories.map((category) => (
          <li key={category.slug}>
            <Link
              to={`/blog/category/${category.slug}`}
              className="text-gray-600 hover:text-blue-600"
            >
              {category.name} ({category.count})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}