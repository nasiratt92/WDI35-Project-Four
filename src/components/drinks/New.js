import React from 'react';
import axios from 'axios';
import DrinkForm from './Form';

class DrinksNew extends React.Component{
  state = {}

  componentDidUpdate(previosProps) {
    // if(previosProps.lat !== this.state.lat){
    //   this.setState({ lat: position.coords.latitude, lon: position.coords.longitude});
    // }
    // component did update is waiting for the change, if prev lat& lon had nothing , than update the coordinates
  }

  handleSubmit = event => {
    console.log('creating dink', this.state);
    event.preventDefault();
    axios.post('/api/drinks', this.state)
      .then(() => this.props.history.push('/drinks'));

  }

  //I am experimenting below
  // uploadHandler = () => {
  //   axios.post('/api/drink', this.state.selectedFile);
  // }
  // handleFileChanged = (event) => {
  //   event.preventDefault();
  //   console.log('event.target.files', event.target.files);
  //   const formData = new FormData();
  //   formData.append('myFile', event.target.files[0], event.target.files[0].name);
  //   axios.post('/api/drinks', formData);
  // }



  ///////////////////////////////////////////////
  handleChange = ({target: {name, value}}) => {
    // console.log('event.target.name is', event.target.name);
    this.setState({[name]: value});

  }
 handleLocation = () => {
   navigator.geolocation.getCurrentPosition((position) => {
     const newState = this.state;
     newState.availibleFrom = { lat: position.coords.latitude, lon: position.coords.longitude};
     this.setState(newState);
   });

   // this.setState({lat: position.coords.latitude}, {lon: position.coords.latitude},{city: position.coords.latitude});
 }



 render(){
   return(
     <section>
       <img src='/assets/HatchfulExport-All/linkedin_banner_image_2.png' />
       <h2 className="title is-2">Add a new Drink</h2>
       <DrinkForm
         handleLocation={this.handleLocation}
         handleSubmit={this.handleSubmit}
         handleChange={this.handleChange}
         fileChangedHandler={this.handleFileChanged}
         drink={this.state}
       />
     </section>
   );
 }
}

export default DrinksNew;
