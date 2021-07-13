import React, { Component } from "react";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultados: [],
      error: false,
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  //   Ser montará antes de que renderizemos
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw Error("Error");
        }
        return response.json();
      })
      .then((resp) => {
        this.setState({ resultados: resp });
      })
      .catch((e) => {
        console.log(e);
        this.setState((prevState) => ({
          error: !prevState.error,
        }));
      });
  }

  handleClick(text) {
    console.log("Has hecho click en el elemento " + text);
  }

  render() {
    const e = this.state;
    if (e.resultados.length > 0) {
      return (
        <div className="container-fluid">
          {e.resultados.map((el) => (
            <li key={el.id} onClick={() => this.handleClick(el.id)}>
              {el.id}: {el.title}-{el.completed ? "✅" : "❌"}
            </li>
          ))}
        </div>
      );
    } else {
      // Mientras no carge los datos de la APi...
      //   Nos da un mensaje de Cargando / O uno de Error
      return (
        <p className="text-center">
          {this.state.error ? "Algo salió mal..." : "Cargando datos..."}
        </p>
      );
    }
  }
}
