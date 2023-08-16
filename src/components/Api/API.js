import Axios from "./Axios";

async function createGame(data) {
  try {
    let result = await Axios.post(`/games`, data);
    return result;
  } catch (error) {
    alert(error.response.data.error);
    return error;
  }
}

async function handleDeleteById(id) {
  try {
    let result = await Axios.delete(`/games/${id}`);
    alert("Successfully deleted!");
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}

async function getAllGames() {
  try {
    let result = await Axios.get("/games");

    return result;
  } catch (e) {
    return e;
  }
};

async function updateGameById(id, data) {
  try {
    let result = await Axios.put(`/games/${id}`, data);
    return result;
  } catch (error) {
    alert(error.response.data.error);
    return error;
  }
}

export { createGame, getAllGames, updateGameById, handleDeleteById };

