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
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          "backgroundImage":
            "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)",
        }}
      >
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-30  md:opacity-75  z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <img src="" className="mb-3" alt="" />
              <h1 className="mb-3 font-bold text-5xl">
                Hi ? Welcome Back To live stream{" "}
              </h1>
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Enter In Your Room{" "}
                </h3>
                {/* <p className="text-gray-500">Please sign in to your account.</p> */}
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Room Id
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="text"
                    placeholder="enter room id"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                  />
                  <div className="text-red-400">{valid}</div>
                </div>

                <div>
                  <button
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    onClick={handleClick}
                  >
                    Enter for live stream
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
