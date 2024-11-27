import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Upload from "./pages/Upload";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";

const user = JSON.parse(localStorage.getItem("profile"));

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={Upload} />
        <Route path="/profile" component={Profile} />
        <Route path="/auth" component={Auth} />
        <Route path="/users" component={User} />
        <Route path="/user/setting" component={Setting} />
        <Route path="/user/:username" component={UserDetail} />
      </Switch>
    </Router>
  );
}

export default App;
