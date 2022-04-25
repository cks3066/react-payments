import React, { useContext, useEffect } from 'react';
import CardDataContext from '../context/CardDateContext';
import { useNavigate } from 'react-router-dom';

export default function ContextUsePage() {
  let navigate = useNavigate();
  const { cards, setCards } = useContext(CardDataContext);
  console.log(cards);

  useEffect(() => {
    setCards((prev) => [...prev, 1]);
  }, []);

  return (
    <div>
      ContextUsePage
      <button
        onClick={() => {
          navigate('/main');
        }}
      >
        Go To Home
      </button>
    </div>
  );
}
