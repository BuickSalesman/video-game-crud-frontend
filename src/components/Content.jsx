import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { GamesIndex } from "./GamesIndex";
import { GamesNew } from "./GamesNew";
import { Modal } from "./Modal";
import { GamesShow } from "./GamesShow";

export function Content() {
  const [games, setGames] = useState([]);
  const [isGamesShowVisible, setIsGamesShowVisible] = useState(false);
  const [currentGame, setCurrentGame] = useState({});
  const [date, setDate] = useState(new Date());

  const handleIndexGames = () => {
    console.log("handleIndexGames");
    axios.get("http://localhost:3000/games.json").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  };

  const handleCreateGame = (params, successCallback) => {
    console.log("handleCreateGame", params);
    axios.post("http://localhost:3000/games.json", params).then((response) => {
      setGames([...games, response.data]);
      successCallback();
    });
  };

  const handleShowGame = (game) => {
    console.log("handleShowGame", game);
    setIsGamesShowVisible(true);
    setCurrentGame(game);
  };

  const handleUpdateGame = (id, params, successCallback) => {
    console.log("handleUpdateGame", params);
    axios.patch(`http://localhost:3000/games/${id}.json`, params).then((response) => {
      setGames(
        games.map((game) => {
          if (game.id === response.data.id) {
            return response.data;
          } else {
            return game;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyGame = (game) => {
    console.log("handleDestroyGame", game);
    axios.delete(`http://localhost:3000/games/${game.id}.json`).then((response) => {
      setGames(games.filter((p) => p.id !== game.id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsGamesShowVisible(false);
  };

  useEffect(handleIndexGames, []);

  const handleDateChange = (date) => {
    setDate(date);

    const month = date.getMonth() + 1;
    const day = date.getDate();

    axios
      .get(`http://localhost:3000/games/games_by_date`) //?month=${month}&day=${day} <-- put this after the url later
      .then((response) => {
        setGames(response.data); //the name setGames may need to change here?
      })
      .catch((error) => {
        console.error("Error fetching games by date:", error);
      });
  };

  //WE HAVE CONNECTION TO THE OTHER SIDE!! it just doesnt work....
  //Joined the discord for igdb maybe this will help

  return (
    <div>
      <div className="ml-12">
        <ReactDatePicker showIcon selected={date} onChange={(date) => handleDateChange(date)} />
      </div>
      <GamesNew onCreateGame={handleCreateGame} />
      <GamesIndex games={games} onShowGame={handleShowGame} />
      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow game={currentGame} onUpdateGame={handleUpdateGame} onDestroyGame={handleDestroyGame} />
      </Modal>
    </div>
  );
}
