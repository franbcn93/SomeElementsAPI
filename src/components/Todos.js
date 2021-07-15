import React, { Component } from "react";
import { Card } from "./Card";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultados: [],
      error: false,
      clickado: "",
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  //   Ser montará antes de que renderizemos
  componentWillMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        if (!response.ok) {
          throw Error("Error");
        }
        return response.json();
      })
      .then((resp) => {
        // console.log(resp);
        this.setState({ resultados: resp });
      })
      .catch((e) => {
        // console.log(e);
        this.setState((prevState) => ({
          error: !prevState.error,
        }));
      });
  }

  handleClick(text, imagen) {
    // console.log("Has hecho click en el elemento " + text);
    // console.log(imagen);
    this.setState({ clickado: imagen });
  }

  render() {
    const e = this.state;
    if (e.resultados.length > 0) {
      return (
        <div className="container-fluid">
          {/* <p>{e.clickado}</p>
          <img src={e.clickado} alt="" /> */}
          {e.resultados.map((el) => (
            //   <Fragment>
            //   <Card key={el.alpha3Code} onClick={() => this.handleClick(el.name)} />
            // </Fragment>
            <div
              key={el.alpha3Code}
              onClick={() => this.handleClick(el.name, el.flag)}
            >
              <Card datos={el} />
            </div>
          ))}
        </div>
      );
    } else {
      // Mientras no carge los datos de la APi...
      //   Nos da un mensaje de Cargando / O uno de Error
      return (
        <p className="text-center">
          {this.state.error ? "Something went wrong..." : "Loading data..."}
        </p>
      );
    }
  }
}
