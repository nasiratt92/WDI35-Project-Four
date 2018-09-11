import React from 'react';
import axios from 'axios';
import DrinkForm from './Form';

class DrinksNew extends React.Component{
  state = {}

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/drinks', this.state)
      .then(() => this.props.history.push('/drinks'));

  }
  handleChange = ({target: {name, value}}) => {
    // console.log('event.target.name is', event.target.name);
    this.setState({[name]: value});

}
 handleLocation = (position) => {
   navigator.geolocation.getCurrentPosition(showPosition);

   this.setState({lat: position.coords.latitude}, {lon: position.coords.latitude},{city: position.coords.latitude});
 }



 render(){
   return(
     <section>
       <img src='/assets/HatchfulExport-All/linkedin_banner_image_2.png' />
       <h2 className="title is-2">Add a new Drink</h2>
       <DrinkForm
         handleSubmit={this.handleSubmit}
         handleChange={this.handleChange}
         drink={this.state}
       />
     </section>
   );
 }
}

export default DrinksNew;
