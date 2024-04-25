import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { getAllGames } from "../Api/API";

import gamesData from "../../gamesData";

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
      // let result = await getAllGames();
      let result = {data: gamesData};
      if (sort === "A-Z") {
        const sortedGames = result.data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setGames(sortedGames);
      } else if (sort === "Z-A") {
        const sortedGames = result.data.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        setGames(sortedGames);
      } else if (sort === "Oldest Year") {
        const sortedGames = result.data.sort((a, b) => {
          if (Number(a.release_year) > Number(b.release_year)) {
            return 1;
          } else if (Number(a.release_year) < Number(b.release_year)) {
            return -1;
          } else {
            return 0;
          }
        })
        setGames(sortedGames)
      } else {
        const sortedGames = result.data.sort((a, b) => {
          if (Number(a.release_year) < Number(b.release_year)) {
            return 1;
          } else if (Number(a.release_year) > Number(b.release_year)) {
            return -1;
          } else {
            return 0;
          }
        })
        setGames(sortedGames)
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
        <option value="Oldest Year">Oldest Year</option>
        <option value="Newest Year">Newest Year</option>
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
