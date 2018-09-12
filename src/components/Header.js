import React from 'react';
import { withRouter } from 'react-router-dom';
// import Auth from '../lib/Auth';


class Header extends React.Component {
// className="navbar is-success is-fixed"

  render(){
    return(
      <header >
        <div>
          <img className="navbar-item" src='/assets/HatchfulExport-All/linkedin_banner_image_2.png' />

        </div>
        <nav className="navbar is-transparent is-fixed-top">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="/assets/HatchfulExport-All/twitter_header_photo_2.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
              Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="/documentation/overview/start/">
              Drinks
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item" href="/drinks">
              See All
                  </a>
                  <a className="navbar-item" href="/drinks/new">
            Add New Drink
                  </a>
                  <a className="navbar-item" href="/eventsAndNews">
          News and Events
                  </a>
                  <a className="navbar-item" href="events/new">
        Add a new Event
                  </a>

                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="bd-tw-button button" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20soft%20drink%20site%20I%20found%20%20http://bit.ly/bottle-it">
                      {/* <button className="w-inline-block social-share-btn tw" href="https://twitter.com/intent/tweet?" target="_blank" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=%20Check%20up%20this%20awesome%20content' + encodeURIComponent(document.title) + ':%20 ' + encodeURIComponent(document.URL)); return false;"></button> */}
                      <span>
                        Tweet
                      </span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="bd-tw-button button" href="https://www.facebook.com/sharer/sharer.php?u=&t=">
                      <span>
                        Share
                      </span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-primary" href="/register">
                      <span className="icon">
                        <i className="user-plus"></i>
                      </span>
                      <span>Sign up</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

    );
  }
}

export default withRouter(Header);
