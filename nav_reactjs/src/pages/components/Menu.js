import React, { Component } from 'react';

import './style.css';

export default class Menu extends Component {

  render() {

    return (
    
      <div>
      <nav id="menu">
          <ul>
              <li><a onClick={ () => this.props.handlePage('home') } href="#">Home</a></li>
              <li><a onClick={ () => this.props.handlePage('sobre') } href="#">Sobre</a></li>
              <li><a onClick={ () => this.props.handlePage('contato') } href="#">Contato</a></li>
          </ul>
      </nav>

      </div>
    
    );
  }
}
