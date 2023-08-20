import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About/About';
import AllGames from './Components/AllGames/AllGames';
import EditGame from './Components/EditGame/EditGame';
import Game from './Components/Game/Game';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import NewGame from './Components/NewGame/NewGame';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/games" element={<AllGames />} />
          <Route path="/games/new-game" element={<NewGame />} />
          <Route path="/games/:id" element={<Game />} />
          <Route path="/games/:id/edit" element={<EditGame />} />
          <Route path="/404" element={<h1>404 Not found!</h1>} />
          <Route path="*" element={<h1>404 Not found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
