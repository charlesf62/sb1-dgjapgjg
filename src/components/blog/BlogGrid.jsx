import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../config/blogPosts';
import { formatDate } from '../../utils/dateUtils';

export default function BlogGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {blogPosts.map((post) => (
        <article key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-600">
                <Link to={`/blog/category/${post.category.slug}`} className="hover:underline">
                  {post.category.name}
                </Link>
              </p>
              <Link to={`/blog/${post.slug}`} className="mt-2 block">
                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-3 text-base text-gray-600">{post.excerpt}</p>
              </Link>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={post.author.imageUrl}
                  alt={post.author.name}
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} min de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}