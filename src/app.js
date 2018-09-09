import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
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
