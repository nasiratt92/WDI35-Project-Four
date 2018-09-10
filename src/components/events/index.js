import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EventsIndex extends React.Component {
  state = {}
  componentDidMount(){
    axios.get('api/events')
      .then(res => {
        this.setState({events: res.data});
      });
  }

  render() {
    return(
      <section>
        <h2 className="tile is-2">Events and New</h2>
        <div className="columns is multiline text-is-center">
          {this.state.events && this.state.events.map(event =>{
            return (
              <div >
                <h2 className="tile is-2">Currently {this.state.events.length} events</h2>
                <Link to={`/events/${event._id}`} key={event._id} className="column is-3 card">
                  <img src={event.eventPoster}></img>
                  <p>{event.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}


export default EventsIndex;
