import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Room } from "./pages/room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
