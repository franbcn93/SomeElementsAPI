import React, { Fragment, useState, useEffect } from "react";

import { Titulos } from "./components/Titulos";

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}: ${information[1]}`)
    .join("\n");
  alert(alertInformation);
}

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
        <h3>Cargando de una API muy sencillita, los 5 primeros elementos</h3>
        <hr />
        {!todos ? "Cargando..." : <Titulos todos={todos} />}
      </div>
    </Fragment>
  );
}

export default App;
