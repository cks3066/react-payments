import React, { createContext, useState, useMemo } from 'react';

const CardDataContext = createContext({
  cards: [],
  setCards: () => {},
});

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  // value 객체는 객체이므로 리렌더링의 주범이 되므로 useMemo로 캐싱해두세요.
  // 안 그러면 나중에 이 데이터를 쓰는 모든 컴포넌트가 매번 리렌더링됩니다.
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
