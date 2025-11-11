import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ApiDataPage = () => {
  // State for the posts
  const [allPosts, setAllPosts] = useState([]);
  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // State for search and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Show 9 posts per page

  // Fetch data on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAllPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty array means this runs only once on mount

  // --- Derived State (Filtering and Pagination) ---

  // 1. Filter posts based on search term
  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Calculate posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // 3. Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // --- Handlers ---
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const PaginateButtons = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="secondary"
        >
          Previous
        </Button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          variant="secondary"
        >
          Next
        </Button>
      </div>
    );
  };

  // --- Render Logic ---

  if (loading) {
    return <div className="text-center text-xl dark:text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        API Posts
      </h1>

      {/* Search Feature */}
      <input
        type="text"
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-3 border-2 border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {post.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 flex-grow">
              {post.body.substring(0, 100)}...
            </p>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No posts found.
          </p>
      )}

      {/* Pagination */}
      <PaginateButtons />
    </div>
  );
};

export default ApiDataPage;