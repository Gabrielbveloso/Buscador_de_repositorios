'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from '../componentes/SearchInput';
import RepositoryList from '../componentes/RepositoryList';


const Home = () => {
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const fetchRepositories = async (query: string, page: number) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=10&page=${page}`);
    setRepositories(response.data.items);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    fetchRepositories(query, 1);
  };

  const handlePageChange = (direction: 'prev' | 'next') => {
    const nextPage = direction === 'next' ? page + 1 : page - 1;
    setPage(nextPage);
    fetchRepositories(query, nextPage);
  };

  useEffect(() => {
    if (query) {
      fetchRepositories(query, page);
    }
  }, [page]);

  return (
    <div className="p-2">
      <SearchInput onSearch={handleSearch} />
      <RepositoryList repositories={repositories} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;
