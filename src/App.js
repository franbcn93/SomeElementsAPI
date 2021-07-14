import React, { Fragment, useState, useEffect } from "react";

import { Titulos } from "./components/Titulos";
import Todos from "./components/Todos";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Fragment>
      <div className="MyApp">
        <h1 className="padding">Countries API</h1>
        <hr />
        <h3>Load data from all countries. You can also see their flag.</h3>
        <hr />
        <Todos />
      </div>
    </Fragment>
  );
}

export default App;
