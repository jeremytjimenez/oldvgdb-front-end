import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGame } from "../Api/API";

// import "./NewGame.css";

function NewGame() {
  const [game, setGame] = useState({
    title: "",
    release_date: "",
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

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {
      let response = await createGame(game);
      if (response.status === 200) {
        alert("Game Created");
        setGame({
          title: "",
          release_date: "",
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
      <h2>Add new game</h2>
      <form className="create-game-form" onSubmit={handleOnSubmit}>
        <div className="create-title">
          <label htmlFor="name">Title</label>
          <br />
          <input
            placeholder="Title"
            type="text"
            id="name"
            value={game?.title}
            onChange={(e) => setGame({ ...game, title: e.target.value })}
            required
          />
        </div>

        <div className="create-releasedate">
          <label htmlFor="release_date">Release Date</label>
          <br />
          <input
            placeholder="Release Date"
            type="text"
            id="release_date"
            value={game?.release_date}
            onChange={(e) => setGame({ ...game, release_date: e.target.value })}
            required
          />
        </div>

        <div className="create-developer">
          <label htmlFor="developer">Developer</label>
          <br />
          <input
            placeholder="Developer"
            type="text"
            id="developer"
            value={game?.developer}
            onChange={(e) => setGame({ ...game, developer: e.target.value })}
            required
          />
        </div>

        <div className="create-publisher">
          <label htmlFor="publisher">Publisher</label>
          <br />
          <input
            placeholder="publisher"
            type="text"
            id="publisher"
            value={game?.publisher}
            onChange={(e) =>
              setGame({ ...game, publisher: e.target.value })
            }
            required
          />
        </div>

        <div className="create-country">
          <label htmlFor="country">Country</label>
          <br />
          <input
            placeholder="Country"
            type="text"
            id="country"
            value={game?.country}
            onChange={(e) => setGame({ ...game, country: e.target.value })}
            required
          />
        </div>

        <div className="create-platform">
          <label htmlFor="platform">Platform</label>
          <br />
          <input
            placeholder="Platform"
            type="text"
            id="platform"
            value={game?.platform}
            onChange={(e) => setGame({ ...game, platform: e.target.value })}
            required
          />
        </div>

        <div className="create-genre">
          <label htmlFor="genre">Genre</label>
          <br />
          <input
            placeholder="Genre"
            type="text"
            id="genre"
            value={game?.genre}
            onChange={(e) => setGame({ ...game, genre: e.target.value })}
            required
          />
        </div>

        <div className="create-player-count">
          <label htmlFor="player-count">Player Count</label>
          <br />
          <input
            placeholder="e.g. 2"
            type="number"
            id="player-count"
            value={game?.player_count}
            onChange={(e) => setGame({ ...game, player_count: e.target.value })}
            required
          />
        </div>

        <div className="create-art">
          <label htmlFor="art">Box Art Url</label>
          <br />
          <input
            placeholder="Box Art Url"
            type="text"
            id="art"
            value={game?.art}
            onChange={(e) => setGame({ ...game, art: e.target.value })}
          />
        </div>

        <div className="create-description">
          <label htmlFor="description">Description</label>
          <br />
          <input
            placeholder="Description.."
            type="text"
            id="description"
            value={game?.description}
            onChange={(e) => setGame({ ...game, description: e.target.value })}
            required
          />
        </div>

        <button className="create-button">CREATE NEW GAME</button>
      </form>
    </div>
  );
}

export default NewGame;
