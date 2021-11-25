import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AllGames from "./Components/AllGames/AllGames";
import CHK from "./Components/Authentication/LogIn/chk";
import LogIn from "./Components/Authentication/LogIn/LogIn";
import PrivateRoute from "./Components/Authentication/PrivateRoute.js/PrivateRoute";
import Register from "./Components/Authentication/Register/Register";
import DashBoard from "./Components/DashBoard/DashBoard";
import Game from "./Components/Game/Game";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import AuthProvider from "./contexts/AuthProvider";
import ConfirmedOrders from './Components/DashBoard/ConfirmedOrders/ConfirmedOrders';
import Review from "./Components/DashBoard/Review/Review";
import PaidOrders from "./Components/DashBoard/PaidOrders/PaidOrders";
import AddAdmin from "./Components/DashBoard/AddAdmin/AddAdmin";
import AddAGame from "./Components/DashBoard/AddAGame/AddAGame";
import AdminRoute from './Components/DashBoard/AdminRoute/AdminRoute';


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
                        <PrivateRoute path="/dashboard">
                            <DashBoard />
                        </PrivateRoute>
                        <PrivateRoute path="/confirmedorders">
                            <ConfirmedOrders></ConfirmedOrders>
                        </PrivateRoute>
                        <PrivateRoute path="/paidorders">
                            <PaidOrders></PaidOrders>
                        </PrivateRoute>
                        <PrivateRoute path="/review">
                            <Review></Review>
                        </PrivateRoute>
                        <AdminRoute path="/addanadmin">
                            <AddAdmin />
                        </AdminRoute>
                        <AdminRoute path="/addagame">
                            <AddAGame />
                        </AdminRoute>
                        <Route exact path="/login">
                            <LogIn />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/chk">
                            <CHK></CHK>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
