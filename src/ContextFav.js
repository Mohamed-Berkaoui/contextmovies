import React, { useState } from "react";

import { createContext } from "react";

export const favoriteStore = createContext();
function ContextFav({ children }) {
  const [favorites, setFavorites] = useState([]);
  return (
    <favoriteStore.Provider
      value={{ favorites: favorites, setFavorites: setFavorites }}
    >
      {children}
    </favoriteStore.Provider>
  );
}

export default ContextFav;
