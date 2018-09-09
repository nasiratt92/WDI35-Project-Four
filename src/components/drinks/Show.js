import React from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';

class DrinksShow extends React.Component {
  state= {}



  componentDidMount(){
    axios.get(`/api/drinks/${this.props.match.params.id}`)
      .then(res => this.setState({drink: res.data}));
  }



  render() {
    const drink = this.state.drink;
    return(
      <section>
        <img src='/assets/HatchfulExport-All/linkedin_banner_image_2.png' />

        {drink &&
          <div>
            <h2 className="title is-2">{drink.name}</h2>
            <img src={drink.imgUrl}></img>
          </div>
        }
      </section>
    );
  }
}

export default DrinksShow;
