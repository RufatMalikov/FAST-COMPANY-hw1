import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import NavBar from "./components/navBar";
import Users from "./components/users";
import UserPage from "./components/userPage";
// const userst = [
//     { id: 1, label: "post 1" },
//     { id: 2, label: "post 2" },
//     { id: 3, label: "post 3" }
// ];

function App() {
    return (
        <div>
            <NavBar />
            <h1></h1>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/userPage" component={UserPage} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
            </Switch>
        </div>
    );
}

export default App;
