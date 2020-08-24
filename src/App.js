import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import TodoListItem from "./components/TodoListItem";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
            <TodoListItem />
          </Route>
          <Route exact path="/add">
            <AddTodo />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
