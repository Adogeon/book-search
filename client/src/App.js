import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import SearchPage from "./pages/SearchPage"
import SavePage from "./pages/SavePage"



function App() {
  return (
    <Router>
      <NavBar/>
      <br/>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/saved" component={SavePage} />
      </Switch>
    </Router>
  );
}

export default App;
