import React from 'react';
import BlogGrid from '../components/blog/BlogGrid';
import BlogCategories from '../components/blog/BlogCategories';
import BlogSearch from '../components/blog/BlogSearch';

export default function Blog() {
  return (
    <main className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Notre Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez nos articles sur l'apprentissage du français et la culture française
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BlogSearch />
            <BlogCategories />
          </div>
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
        </div>
      </div>
    </main>
  );
}