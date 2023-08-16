import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About/About'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />}/>
          <Route path="/games" element={<AllGames />} />
          <Route path="/games/create-game" element={<NewGame />} />
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
