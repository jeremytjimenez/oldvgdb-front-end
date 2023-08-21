import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGame } from "../Api/API";

import "./NewGame.css";
import floppydisk from '../../assets/floppydisk.png'

function NewGame() {
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

  function handleSingleQuote(desc) {
    let strArray = desc.split("");

    let newStrArray = strArray;

    strArray.forEach((char, index) => {
      if (char === "'") {
        newStrArray.toSpliced(index, 0, "'");
      }
    })

    let newDesc = newStrArray.join("");

    return newDesc;
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {

      let formattedDescription = handleSingleQuote(game.description)
      
      let response = await createGame({
        ...game,
        description: formattedDescription
      });
      if (response.status === 200) {
        alert("Game Created");
        setGame({
          title: "",
          release_year: "",
          developer: "",
          publisher: "",
          country: "",
          platform: "",
          genre: "",
          player_count: 0,
          art: "",
          description: "",
        });
        navigate(`/games/${response.data.data.id}`);
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="create-game">
      <h1>Add new game</h1>
      <img src={floppydisk} alt="floppy disk"/>
      <form className="create-game-form" onSubmit={handleOnSubmit}>
        <div className="create-title ">
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

        <div className="create-releaseyear">
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

        <div className="create-developer">
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

        <div className="create-publisher">
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

        <div className="create-country">
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

        <div className="create-platform">
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

        <div className="create-genre">
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

        <div className="create-player-count">
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

        <div className="create-art">
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

        <div className="create-description">
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Description.."
            rows="5"
            id="description"
            value={game?.description}
            onChange={(e) => setGame({ ...game, description: e.target.value })}
          />
        </div>
        <br />

        <button className="create-button btn">CREATE NEW GAME</button>
      </form>
    </div>
  );
}

export default NewGame;
