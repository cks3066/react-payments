import React, { useContext, useEffect } from 'react';
import CardDataContext from '../context/CardDateContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  let navigate = useNavigate();
  const { cards, setCards } = useContext(CardDataContext);
  console.log(cards);

  useEffect(() => {
    setCards((prev) => [...prev, 2]);
  }, []);

  return (
    <div>
      Home{' '}
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go To Context Page
      </button>
    </div>
  );
}
