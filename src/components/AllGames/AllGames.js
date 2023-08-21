import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllGames } from "../Api/API";

import "./AllGames.css";

function AllGames() {
  const [games, setGames] = useState([]);
  const [sort, setSort] = useState("A-Z");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  async function fetchData() {
    try {
      let result = await getAllGames();
      if (sort === "A-Z") {
        const sortedGames = result.data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setGames(sortedGames);
      } else {
        const sortedGames = result.data.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        setGames(sortedGames);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelectChange(e) {
    setSort(e.target.value);
  }

  return (
    <div className="all-games">
      <select name="sort" id="sort" onChange={handleSelectChange} defaultValue={sort}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <ul>
        {games.map((game) => {
          return (
            <li key={game.id}>
              <div>
                <img
                  src={game.art}
                  alt="box art"
                  onClick={() => navigate(`/games/${game.id}`)}
                />
                <br />
                <h2 onClick={() => navigate(`/games/${game.id}`)}>
                  {game.title}
                </h2>
                <p>{game.release_year}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllGames;
