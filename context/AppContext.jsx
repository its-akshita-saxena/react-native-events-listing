import React, { createContext, useState, } from 'react';
import Toast from 'react-native-toast-message';

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
    const exists = wishlist.some(
        item => item.id === event.id
    );
    if (exists) {
        setWishlist(
            wishlist.filter(
                item => item.id !== event.id
            )
        );
        Toast.show({
            type: 'success',
            text1: 'Removed from Wishlist ❤️',
        });
    } else {
        setWishlist([
            ...wishlist,
            event,
        ]);

        Toast.show({
            type: 'success',
            text1: 'Added to Wishlist ❤️',
        });
    }
};

  // Add Reservation 
 const addReservation = (event) => {
    const alreadyReserved =
        reservations.some(
            item => item.id === event.id
        );

    if (alreadyReserved) {
        setReservations(
            reservations.filter(
                item => item.id !== event.id
            )
        );
        Toast.show({
            type: 'success',
            text1: 'Reservation Removed ❌',
        });

    } 
    else {
        setReservations([
            ...reservations,
            event,
        ]);
        Toast.show({
            type: 'success',
            text1: 'Reservation Added 🎟',
        });
    }
};
  // const addReservation = (event) => {
  //   setReservations(prev => {
  //     const alreadyReserved = prev.some( // Check if event is already reserved
  //       item => item.id === event.id
  //     );

  //     if (alreadyReserved) {
  //       return prev; //to prevent duplicates, return existing reservations if event is already reserved
  //     }

  //     return [...prev, event];
  //   });
  // };


  return (

    <AppContext.Provider
      value={{ wishlist, toggleWishlist, reservations, addReservation, isDarkTheme, toggleTheme, theme, }}  >

      {children}

    </AppContext.Provider>
  );
};

export default AppProvider;