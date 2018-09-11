import React from 'react';
import axios from 'axios';
import EventForm from './Form';

class EventsNew extends React.Component{
  state = {}

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/events', this.state)
      .then(() => this.props.history.push('/events'));

  }
  handleChange = ({target: {name, value}}) => {
    // console.log('event.target.name is', event.target.name);
    this.setState({[name]: value});
  }
  handleDayChange = day => {
    // console.log('event.target.name is', event.target.name);
    this.setState({date: day});
  }
  render(){
    return(
      <section>
        <img src='/assets/HatchfulExport-All/linkedin_banner_image_2.png' />
        <h2 className="title is-2">Add a new Event</h2>
        <EventForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleDayChange={this.handleDayChange}
          event={this.state}
        />
      </section>
    );
  }
}

export default EventsNew;
