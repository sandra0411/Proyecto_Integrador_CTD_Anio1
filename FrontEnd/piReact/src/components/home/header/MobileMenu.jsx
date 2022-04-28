import React, { Component } from "react";

class MobileMenu extends Component {
  render() {
    const { fn } = this.props;
    return (
      <div class="menu" onClick={fn}>
        <i class="fas fa-bars kangrebur"></i>
      </div>
    );
  }
}

export default MobileMenu;