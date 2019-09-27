import React, { Component } from 'react';
import Menu from './pages/components/Menu';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

export default class App extends Component {

  state = {
    navToggle: { home: false, sobre: false, contato: false }
  }

  componentDidMount(){
    this.setState({ navToggle: { home: true } });
  }

  handlePage = page =>{

    if(page === 'home')
      this.setState({ navToggle: { home: true, sobre: false, contato: false } });

    if(page === 'sobre')
      this.setState({ navToggle: { home: false, sobre: true, contato: false } });

    if(page === 'contato')
      this.setState({ navToggle: { home: false, sobre: false, contato: true } });
  }

  render(){
    return (
      <div className="App">
        <Menu handlePage={ this.handlePage } />
        { this.state.navToggle.home && <Home /> }
        { this.state.navToggle.sobre && <Sobre /> }
        { this.state.navToggle.contato && <Contato /> }
      </div>
    );

  }
}
