const RepositoryList: React.FC<{ repositories: any[]; onPageChange: (direction: 'prev' | 'next') => void }> = ({ repositories, onPageChange }) => {

  return (
    <div>
      <ul>
        {repositories.map((repo: any) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <div className="text-center space-x-2 mt-2">
        <button className="bg-orange-500 text-white px-4 py-1 rounded" onClick={() => onPageChange('prev')} disabled={false}>
          Previous
        </button>
        <button className="bg-orange-500 text-white px-4 py-1 rounded" onClick={() => onPageChange('next')} disabled={false}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RepositoryList;
