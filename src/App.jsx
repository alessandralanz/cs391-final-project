import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home.jsx";
import Fenway from "./components/fenway.jsx";
import Crc from './pages/crc.jsx';
import NavBar from "./components/navbar.jsx";

function App() {
  return (
      <Router>
      <NavBar/>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/fenway" element={<Fenway/>}/>
              <Route path="/Crc" element={<Crc/>}/>
          </Routes>
      </Router>
  );
}

export default App
