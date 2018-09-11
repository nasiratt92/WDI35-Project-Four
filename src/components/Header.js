import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Auth from '../lib/Auth';


class Header extends React.Component {


  render(){
    return(
      <header className="navbar is-success is-fixed">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/drinks">Drinks</Link>
        <Link className="navbar-item" to="/eventsAndNews">Events & News</Link>
        <Link className="navbar-item" to="/drinks/new">Add a drink</Link>
        <Link className="navbar-item" to="/events/new">Add an Event</Link>
        <Link className="navbar-item" to="/register">Register</Link>
      </header>

      // <Navbar>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //       <a href="#home">React-Bootstrap</a>
      //     </Navbar.Brand>
      //   </Navbar.Header>
      //   <Nav>
      //     <NavItem eventKey={1} href="#">
      //       Link
      //     </NavItem>
      //     <NavItem eventKey={2} href="#">
      //       Link
      //     </NavItem>
      //     <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      //       <MenuItem eventKey={3.1}>Action</MenuItem>
      //       <MenuItem eventKey={3.2}>Another action</MenuItem>
      //       <MenuItem eventKey={3.3}>Something else here</MenuItem>
      //       <MenuItem divider />
      //       <MenuItem eventKey={3.4}>Separated link</MenuItem>
      //     </NavDropdown>
      //   </Nav>
      // </Navbar>;
    );
  }
}

export default withRouter(Header);
