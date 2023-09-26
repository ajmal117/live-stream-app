import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [roomId, setRoomId] = useState();
  const [valid, setValid] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    if (roomId === undefined) {
      navigate("/");
      setValid("Enter a room id");
    } else {
      navigate(`/room/${roomId}`);
    }
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter room id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button onClick={handleClick}>Go live stream</button>
      </div>
      <div>{valid}</div>
    </>
  );
};
