import React from 'react';
import {Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar"


function App() {
  return (
    <Switch>
      <NavBar/>
      <Route path="/" exact component={SearchPage} />
      <Route path="/saved" exact component={SavePage} />
      <Route path="/books/:id" component={ViewPage} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default App;
