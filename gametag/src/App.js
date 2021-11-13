import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AllGames from "./Components/AllGames/AllGames";
import LogIn from "./Components/Authentication/LogIn/LogIn";
import PrivateRoute from "./Components/Authentication/PrivateRoute.js/PrivateRoute";
import Register from "./Components/Authentication/Register/Register";
import DashBoard from "./Components/DashBoard/DashBoard";
import Game from "./Components/Game/Game";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import AuthProvider from "./contexts/AuthProvider";


function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <NavBar></NavBar>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/allgames">
                            <AllGames />
                        </Route>
                        <PrivateRoute exact path="/game/:id">
                            <Game />
                        </PrivateRoute>
                        <Route exact path="/dashboard">
                            <DashBoard />
                        </Route>
                        <Route exact path="/login">
                            <LogIn />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
