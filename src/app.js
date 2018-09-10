import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper,faCalendarAlt , faMapMarkerAlt,faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
// import bulmaCalendar from '/node_modules/bulma-extensions/bulma-calendar/dist/bulma-calendar.min.js'

library.add(faNewspaper, faMapMarkerAlt,faEnvelope, faKey,faCalendarAlt);


// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bulma/css/bulma.css';
// require('react-bootstrap/lib/NavbarHeader');
import Header from './components/Header';
// import Footer from './components/Footer';
// import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import DrinksIndex from './components/drinks/Index';
import DrinksNew from './components/drinks/New';
import DrinksEdit from './components/drinks/Edit';
import DrinksShow from './components/drinks/Show';
// import EventsIndex from './components/events/Index';
import EventsNew from './components/events/New';
import EventsEdit from './components/events/Edit';
import EventsShow from './components/events/Show';
import eventsAndNewsIndex from './components/eventsAndNewsIndex';


class App extends React.Component {
  render() {
    return (
      <main>

        <Header/>
        <Switch>
          {/* <Route exact path="/login" /> */}
          <Route exact path="/register" component={AuthRegister}/>
          <Route exact path="/drinks" component={DrinksIndex}/>
          <Route exact path="/drinks/new" component={DrinksNew}/>
          <Route path="/drinks/:id/edit" component={DrinksEdit}/>
          <Route path="/drinks/:id" component={DrinksShow}/>
          {/* <Route exact path="/events" component={EventsIndex}/> */}
          <Route exact path="/events/new" component={EventsNew}/>
          <Route path="/events/:id/edit" component={EventsEdit}/>
          <Route path="/events/:id" component={EventsShow}/>
          <Route exact path="/eventsAndNews" component={eventsAndNewsIndex}/>
        </Switch>
        {/* <div>
          <h1>Hello World</h1>
          <img src="src/assets/HatchfulExport-All/logo.png"></img>
        </div> */}
        {/* <Footer/> */}
      </main>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
