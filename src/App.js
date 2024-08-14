import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/history" exact element={<History />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
