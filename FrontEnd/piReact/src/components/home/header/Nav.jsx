import React, { Component } from "react";
import HamburguerMenu from "./HamburguerMenu";
import MobileMenu from "./MobileMenu";
import Nav_function from './Nav_funtion.js' // Importo componente con condicional.


class Nav extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  HandlerClickMenu = () => {
    this.setState({ open: true });
  };
  HandlerClickX = () => {
    this.setState({ open: false });
  };
  render() {
    let visible;
    if (this.state.open) {
      visible = <HamburguerMenu  fn={this.HandlerClickX} />;
    }
    return (
      <nav>
        <MobileMenu fn={this.HandlerClickMenu} />
        
        <Nav_function/>
        
        {visible}
      </nav>
    );
  }
}

export default Nav;
