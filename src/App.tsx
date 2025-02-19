import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
