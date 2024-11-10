import React, { useContext } from 'react'
import { favoriteStore } from '../ContextFav'



function Favorites() {
    const favoritesState=useContext(favoriteStore)
  return (
    <div>
        {favoritesState.favorites.map(film=><h1>{film.title}</h1>)}
    </div>
  )
}

export default Favorites