import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Chat from "./assets/chat.png";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <img className="home-icon" alt="Chat" src={Chat}/> 
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        Entrar no Chat
      </Link>
    </div>
  );
};

export default Home;