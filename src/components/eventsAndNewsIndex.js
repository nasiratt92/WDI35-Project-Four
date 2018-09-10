import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Auth from '../lib/Auth';
import EventsIndex from './events/Index';
import NewsIndex from './news/Index';

class eventsAndNewsIndex extends React.Component {


  render(){
    return(
      <div>
        <h2 className="title is-1">.</h2>
        <h2 className="title is-1"> Latest News & Events </h2>
        <div className="columns is-multiline text-is-center">
          <div className="column is-half card">
            <h2 className="title is-2"><FontAwesomeIcon
              icon="newspaper"/>   Latest News</h2>
            <NewsIndex/>
          </div>
          <div className="column is-half card">
            <h2 className="title is-2"><FontAwesomeIcon
              icon="calendar-alt"/>   Events </h2>
            <EventsIndex/>
          </div>
        </div>
      </div>
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

export default withRouter(eventsAndNewsIndex);
