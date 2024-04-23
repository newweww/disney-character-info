import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcha/:_id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
