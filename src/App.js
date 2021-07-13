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
        <h1 className="padding">Reviews API</h1>
        <hr />
        <h3>
          Cargando de una API de todos sus elementos. En el que almacena cada
          elemento clickado
        </h3>
        <hr />
        <Todos />
        {/* {!todos ? "Cargando..." : <Titulos todos={todos} />} */}
      </div>
    </Fragment>
  );
}

export default App;
