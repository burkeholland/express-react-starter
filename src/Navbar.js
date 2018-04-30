import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import eplLogo  from './ligalogos/epllogo.png'
import laligaLogo  from './ligalogos/laligalogo.png'
import serieaLogo  from './ligalogos/seriealogo.jpg'
import champsLogo  from './ligalogos/championslogo.png'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">football : futbol : calcio : futebol : soccer - Pick Your League</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='/laliga'> <span> <img className="mini-image" src={laligaLogo}></img></span> La Liga</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/epl"> <span> <img className="mini-image" src={eplLogo}></img></span> English Premier League</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/seriea/"> <span> <img className="mini-image" src={serieaLogo}></img></span> Serie A</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/champions"> <span> <img className="mini-image" src={champsLogo}></img></span> Champions League</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}