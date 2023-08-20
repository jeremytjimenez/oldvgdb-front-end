import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllGames } from "../Api/API";

// import "./AllGames.css";

function AllGames() {
  const [games, setGames] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await getAllGames();
      const sortedGames = result.data.sort((a, b) => a.title.localeCompare(b.title));
      setGames(sortedGames);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="all-games">
      <ul>
        {games.map((game) => {
          return (
            <li key={game.id}>
              <img
                src={game.art}
                alt="box art"
                onClick={() => navigate(`/games/${game.id}`)}
              />
              <br />
              <h2 onClick={() => navigate(`/games/${game.id}`)}>{game.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllGames;
