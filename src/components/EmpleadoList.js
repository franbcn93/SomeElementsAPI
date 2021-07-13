import React, { Component } from "react";

export default class EmpleadoList extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {/* {this.props.listado.map((empleado) => {
            <p>{empleado.id}</p>;
          })} */}
        </ul>
      </div>
    );
  }
}
