import React, { createContext, useState, } from 'react';

export const AppContext =
  createContext();

const AppProvider = ({ children }) => {

  // Wishlist State
  const [wishlist, setWishlist] = useState([]);

  // Reservations State
  const [reservations, setReservations,] = useState([]);
  // Theme State
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Toggle Theme Function
  const toggleTheme = () => {

    setIsDarkTheme(!isDarkTheme);
  };

  // Theme Colors
  const theme = isDarkTheme
    ? {
      background: '#000',
      card: '#1c1c1e',
      text: '#fff',
      subText: '#aaa',
      button: '#f5c542',
    }

    : {
      background: '#fff',
      card: '#f2f2f2',
      text: '#000',
      subText: '#555',
      button: '#f5c542',
    };


  // Toggle Wishlist
  const toggleWishlist = (event) => {

    const alreadyExists = wishlist.find((item) => item.id === event.id);

    if (alreadyExists) {
      const updatedWishlist = wishlist.filter((item) => item.id !== event.id);
      setWishlist(updatedWishlist);

    } else {

      setWishlist([
        ...wishlist,
        event,
      ]);
    }
  };

  // Add Reservation 
  const addReservation = (event) => {
    setReservations(prev => {
      const alreadyReserved = prev.some( // Check if event is already reserved
        item => item.id === event.id
      );

      if (alreadyReserved) {
        return prev; //to prevent duplicates, return existing reservations if event is already reserved
      }

      return [...prev, event];
    });
  };


  return (

    <AppContext.Provider
      value={{ wishlist, toggleWishlist, reservations, addReservation, isDarkTheme, toggleTheme, theme, }}  >

      {children}

    </AppContext.Provider>
  );
};

export default AppProvider;