import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AllGames from "./Components/AllGames/AllGames";
import DashBoard from "./Components/DashBoard/DashBoard";
import Game from "./Components/Game/Game";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allgames" element={<AllGames />} />
                    <Route path="/game/:id" element={<Game />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
