import React from 'react';
import axios from 'axios';
import EventForm from './Form';

class EventsEdit extends React.Component{
  state = {}

  handleSubmit = event => {
    event.preventDefault();
    console.log('This.state is ...', this.state);
    axios.put(`/api/events/${this.props.match.params.id}`, this.state, {
      headers: {
      }
    })
      .then(() => this.props.history.push(`/events/${this.props.match.params.id}`));

  }
  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  }
  componentDidMount(){
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }
  render(){
    return(
      <section>
        <h2 className="title is-2">Edit the events details</h2>
        <EventForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          event={this.state}
        />
      </section>
    );
  }
}
export default EventsEdit;
