import { useState } from 'react';

const SearchInput = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2 text-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search repositories"
        className="border border-gray-300 rounded px-2 py-1;"
      />
      <button type="submit" className="bg-orange-500 text-white px-4 py-1 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
