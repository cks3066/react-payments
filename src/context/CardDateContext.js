import React, { createContext, useState, useMemo } from 'react';

const CardDataContext = createContext({
  cards: [],
  setCards: () => {},
});

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const value = useMemo(
    () => ({
      cards,
      setCards,
    }),
    [cards, setCards]
  );

  return (
    <CardDataContext.Provider value={value}>
      {children}
    </CardDataContext.Provider>
  );
};

export default CardDataContext;
