import React, { Component } from 'react';

export default class Contato extends Component {
  render() {
    return (
      <div className="contato">
        <h1> Contato </h1>
        <form>
          <label> Nome: </label> <br />
          <input type="text" /> <br />

          <label> Matrícula: </label> <br />
          <input type="text" /> <br />

          <br />

          <button type="submit"> Enviar </button>

        </form>
      </div>
    );
  }
}
