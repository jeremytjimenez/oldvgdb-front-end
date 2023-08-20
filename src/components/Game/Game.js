import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllGames, handleDeleteById } from "../Api/API";

// import "./Game.css"

function Game() {
  const [game, setGame] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
    try {
      let result = await getAllGames();

      let findGame = result.data.findIndex((item) => {
        return item.id === Number(id);
      });
      setGame(result.data[findGame]);
    } catch (error) {
      console.log(error);
    }
  };
    fetchData();
  }, [id]);

  async function handleDeleteRequest(id) {
    setShowConfirmation(true);
  }

  async function handleDeleteSubmit() {
    try {
      let result = await handleDeleteById(id);
      if (result.status === 200) {
        navigate("/games");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancelDelete() {
    setShowConfirmation(false);
  }

  return (
    <div className="game">
      <section className="gameDetails">
        <img
          className="showGameImage"
          src={game?.art}
          alt="box art"
        />
        <div className="gameInfo">
          <p className="gameDetailsName">
            <strong>
              {game?.title} {`(${game?.release_date})`}
            </strong>
          </p>

          <p className="gameDeveloper"> Developer: {game?.developer}</p>
          <p className="gameGenre">{game?.genre}</p>
          <p className="gamePublisher">{game?.publisher}
          </p>
          <p className="gameCountry">{game?.country}</p>
          <p className="gamePlayerCount">
            Players: {game?.player_count}
            <br />
          </p>
          <br />
          <button
            className="gameEdit"
            onClick={() => {
              navigate(`/games/${id}/edit`);
            }}
          >
            Edit
          </button>
          <br />
          <button className="delete" onClick={() => handleDeleteRequest(id)}>
            Delete
          </button>
        </div>
      </section>

      <button
        className="gameBack"
        onClick={() => {
          navigate("/games");
        }}
      >
        Go Back
      </button>

      {showConfirmation && (
        <div className="game-deletion-container-navigation">
          <p>
            <strong>Are you sure you want to delete this game?</strong>
          </p>
          <ul>
            <li>
              <button onClick={handleDeleteSubmit}>Yes</button>
            </li>
            <li>
              <button onClick={handleCancelDelete}>No</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Game;
