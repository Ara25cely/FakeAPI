import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books'
import Users from './components/Users'
import Products from './components/Products'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Books />} />
        <Route path="/usuarios" exact element={<Users />} />
        <Route path="/productos" exact element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
