import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import All_Character from "./pages/All_Character";
import Character from "./pages/Character";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcha" element={<All_Character />} />
          <Route path="/allcha/:_id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
