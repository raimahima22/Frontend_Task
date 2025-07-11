import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Task1 from './pages/Task1.jsx';
import AnimatedGrid from './pages/AnimatedGrid.jsx';
import Task2 from './pages/Task2.jsx';
import Task3 from './pages/Task3.jsx';
import { Link } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Task1" element={<Task1 />} />
        <Route path="/Task2" element={<Task2 />} />
        <Route path="/AnimatedGrid" element={<AnimatedGrid />} />
          <Route path="/Task3" element={<Task3 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
