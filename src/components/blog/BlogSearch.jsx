import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogSearch() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/blog/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search" className="sr-only">
        Rechercher des articles
      </label>
      <div className="relative">
        <input
          type="text"
          id="search"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Rechercher..."
        />
      </div>
    </form>
  );
}