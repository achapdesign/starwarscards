import React, { useState } from 'react';

function FavoritesList() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (item) => {
    setFavorites(favorites.filter((favorite) => favorite !== item));
  };

  return (
    <div>
      <h2>Favorites List</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite}>
            {favorite}{' '}
            <button onClick={() => removeFromFavorites(favorite)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2>Items List</h2>
      <ul>
        <li>
          Item 1 <button onClick={() => addToFavorites('Item 1')}>Add</button>
        </li>
        <li>
          Item 2 <button onClick={() => addToFavorites('Item 2')}>Add</button>
        </li>
        <li>
          Item 3 <button onClick={() => addToFavorites('Item 3')}>Add</button>
        </li>
      </ul>
    </div>
  );
}

export default FavoritesList;