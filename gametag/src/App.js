import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AllGames from "./Components/AllGames/AllGames";
import Games from "./Components/Games/Games";
import Home from "./Components/Home/Home";
import NavBar from './Components/NavBar/NavBar';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allgames" element={<AllGames />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
