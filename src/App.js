import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CardsProvider } from './context/CardDateContext';

import Home from './pages/Home';
import ContextUsePage from './pages/ContextUsePage';

export default function App() {
  return (
    <CardsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ContextUsePage />} exact />
          <Route path="/main" element={<Home />} />
        </Routes>
      </Router>
    </CardsProvider>
  );
}
