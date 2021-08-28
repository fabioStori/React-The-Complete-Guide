import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  //javascript object that will actually contain a react component, with "public" properties and functions
  favorites: [],
  totalFavorites: 0,
  addFavorite: favoriteMeetup => {},
  removeFavorite: meetupId => {},
  itemIsFavorite: meetupId => {return true || false}
});

export function FavoritesContextProvider(props) {
  // it will be a regular react component, but it will provide the context to all components interested
  const [userFavorites, setuserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // setuserFavorites(userFavorites.concat(favoriteMeetup)); //can cause problems since it depends on the latest snapshot of userFavorites
    setuserFavorites(previousUserFavorites => {
      // guarantees that we're working in the latest state snapshot
      return previousUserFavorites.concat(favoriteMeetup); // this is the best way of updating a state if you depend on the previous version of that state (in this case, userFavorites)
    });
  }

  function removeFavoriteHandler(meetupId) {
    setuserFavorites(previousUserFavorites => {
      return previousUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
