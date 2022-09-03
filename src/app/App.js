import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/navBar";
import Users from "./layouts/users";
import UserPage from "./components/userPage";

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
