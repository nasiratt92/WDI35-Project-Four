import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <h2 className="title is-2">Currently {this.state.events && this.state.events.length} events</h2>
        <div >
          {this.state.events && this.state.events.map((event, i) =>{
            return (
              <div key={i} >
                {/* <Link to={`/events/${event._id}`} key={event._id}>
                  <img src={event.eventPoster}></img>
                  <p className="title is-4">{event.name}</p>
                  <FontAwesomeIcon
                    icon="map-marker-alt"/>
                </Link> */}
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img src="{event.drink.imgUrl}"/>
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{event.name}</strong> <small>{event.city}</small> <small>{event.date}{/*.toDateString()*/}</small>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}


export default EventsIndex;
