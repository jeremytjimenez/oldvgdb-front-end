import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateGameById, getAllGames } from "../Api/API";

import "./EditGame.css";
import pen from "../../assets/pen-pixel-icon-png.png";

function EditGame() {
  const [game, setGame] = useState({
    title: "",
    release_year: "",
    developer: "",
    publisher: "",
    country: "",
    platform: "",
    genre: "",
    player_count: 1,
    art: "",
    description: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await getAllGames();

        let findGame = result.data.findIndex((item) => {
          return item.id === Number(id);
        });
        const foundGame = result.data[findGame];
        setGame(foundGame);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  function handleSingleQuote(desc) {
    let strArray = desc.split("");

    let newStrArray = strArray;

    strArray.forEach((char, index) => {
      if (char === "'") {
        newStrArray.toSpliced(index, 0, "'");
      }
    });

    let newDesc = newStrArray.join("");

    return newDesc;
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    let formattedDescription = handleSingleQuote(game.description);
    try {
      let response = await updateGameById(id, {
        ...game,
        description: formattedDescription,
      });
      if (response.status === 200) {
        alert("Updated Successfully");
        navigate(`/games/${id}`);
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="edit-game">
      <h1>Edit game</h1>
      <img src={pen} alt="pen" />
      <form className="edit-game-form" onSubmit={handleOnSubmit}>
        <div className="edit-title">
          <label className="label label-info" htmlFor="name">Title</label>
          <input
            placeholder="Title"
            type="text"
            id="name"
            value={game?.title}
            onChange={(e) => setGame({ ...game, title: e.target.value })}
            required
          />
        </div>
        <br />

        <div className="edit-releasedate">
          <label className="label label-info" htmlFor="release_year">Release Year</label>
          <input
            placeholder="Release Year"
            type="text"
            id="release_year"
            value={game?.release_year}
            onChange={(e) => setGame({ ...game, release_year: e.target.value })}
            required
          />
        </div>
        <br />

        <div className="edit-developer">
          <label className="label label-info" htmlFor="developer">Developer</label>
          <input
            placeholder="Developer"
            type="text"
            id="developer"
            value={game?.developer}
            onChange={(e) => setGame({ ...game, developer: e.target.value })}
            required
          />
        </div>
        <br />

        <div className="edit-publisher">
          <label className="label label-info" htmlFor="publisher">Publisher</label>
          <input
            placeholder="publisher"
            type="text"
            id="publisher"
            value={game?.publisher}
            onChange={(e) => setGame({ ...game, publisher: e.target.value })}
            required
          />
        </div>
        <br />

        <div className="edit-country">
          <label className="label label-info" htmlFor="country">Country</label>
          <input
            placeholder="Country"
            type="text"
            id="country"
            value={game?.country}
            onChange={(e) => setGame({ ...game, country: e.target.value })}
            required
          />
        </div>
        <br />

        <div className="edit-platform">
          <label className="label label-info" htmlFor="platform">Platform</label>
          <input
            placeholder="Platform"
            type="text"
            id="platform"
            value={game?.platform}
            onChange={(e) => setGame({ ...game, platform: e.target.value })}
            required
          />
        </div>
        <br />

        <div className="edit-genre">
          <label className="label label-info" htmlFor="genre">Genre</label>
          <input
            placeholder="Genre"
            type="text"
            id="genre"
            value={game?.genre}
            onChange={(e) => setGame({ ...game, genre: e.target.value })}
            required
          />
        </div>
        <br />

        <div className="edit-player-count">
          <label className="label label-info" htmlFor="player-count">Player Count</label>
          <input
            placeholder="e.g. 2"
            type="number"
            id="player-count"
            value={game?.player_count}
            onChange={(e) => setGame({ ...game, player_count: e.target.value })}
            required
          />
        </div>
        <br />

        <div className="edit-art">
          <label className="label label-info" htmlFor="art">Art Url</label>
          <input
            placeholder="Art Url"
            type="text"
            id="art"
            value={game?.art}
            onChange={(e) => setGame({ ...game, art: e.target.value })}
          />
          <p>e.g. screenshot or box art...</p>
        </div>
        <br />

        <div className="edit-description">
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Description.."
            type="text"
            rows="5"
            id="description"
            value={game?.description}
            onChange={(e) => setGame({ ...game, description: e.target.value })}
            required
          />
        </div>
        <br />

        <button className="edit-button btn">EDIT GAME</button>
      </form>
    </div>
  );
}

export default EditGame;
