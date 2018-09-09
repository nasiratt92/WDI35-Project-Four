import React from 'react';
import axios from 'axios';
import DrinkForm from './Form';

class DrinksEdit extends React.Component{
  state = {}

  handleSubmit = event => {
    event.preventDefault();
    console.log('This.state is ...', this.state);
    axios.put(`/api/drinks/${this.props.match.params.id}`, this.state, {
      headers: {
      }
    })
      .then(() => this.props.history.push(`/drinks/${this.props.match.params.id}`));

  }
  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  }
  componentDidMount(){
    axios.get(`/api/drinks/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }
  render(){
    return(
      <section>
        <h2 className="title is-2">Edit the drinks details</h2>
        <DrinkForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          drink={this.state}
        />
      </section>
    );
  }
}
export default DrinksEdit;
