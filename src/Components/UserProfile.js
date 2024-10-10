import React from "react";

function UserProfile({ favorites = [], onRemoveFavorite }) {
  return (
    <div>
      <h2>User Favorite</h2>
      <h3>Your Favorite Books</h3>
      {favorites.length === 0 ? (
        <p>No favorite books added yet.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map(book => (
            <li key={book.id} className="favorite-book">
              <div className="favorite-details">
                <span className="book-title">{book.title}</span> by <span className="book-author">{book.writer}</span>
              </div>
              <button onClick={() => onRemoveFavorite(book)} className="remove-btn">Remove from Favorites</button>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}
export default UserProfile;
