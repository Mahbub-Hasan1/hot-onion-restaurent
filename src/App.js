import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState("breakfast");
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Home></Home>
    </CategoryContext.Provider>
  );
}

export default App;
