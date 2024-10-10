import React, { useState, useEffect } from 'react';
import '../Styling/Home.css';
import UserProfile from './UserProfile';

function Home() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.log(error));
  }, []);

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some(favBook => favBook.id === book.id)) {
        return [...prevFavorites, book];
      }
      return prevFavorites;
    });
    setBooks(prevBooks => prevBooks.filter(b => b.id !== book.id));
  };

  const removeFromFavorites = (book) => {
    setFavorites(prevFavorites => prevFavorites.filter(favBook => favBook.id !== book.id));
    setBooks(prevBooks => [...prevBooks, book]);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter(book =>
    (book.title && book.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (book.author && book.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (book.genre && book.genre.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="home-container">
      <h1 className="home-header">Book Store</h1>
      <input
        type="text"
        placeholder="Search by title, author, or genre"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="book-list">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>{book.writer}</p>
            <button onClick={() => addToFavorites(book)}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
      
      {/* Add a new div for styling the UserProfile */}
      <div className="user-profile-section">
        <UserProfile favorites={favorites} onRemoveFavorite={removeFromFavorites} />
      </div>
    </div>
  );
}

export default Home;
