import React from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';

class EventsShow extends React.Component {
  state= {}



  componentDidMount(){
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({event: res.data}));
  }



  render() {
    const event = this.state.event;
    return(
      <section>
        <img src='/assets/HatchfulExport-All/linkedin_banner_image_2.png' />

        {event &&
          <div>
            <h2 className="title is-2">{event.name}</h2>
            <img src={event.image_of_drink}></img>
          </div>
        }
      </section>
    );
  }
}

export default EventsShow;
