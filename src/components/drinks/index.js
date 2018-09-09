import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DrinksIndex extends React.Component {
  state = {}
  componentDidMount(){
    axios.get('api/drinks')
      .then(res => {
        this.setState({drinks: res.data});
      });
  }

  render() {
    return(
      <section>
        <h2 className="tile is-2">Our great finds</h2>
        <div className="columns is multiline text-is-center">
          {this.state.drinks && this.state.drinks.map(drink =>{
            return (
              <Link to={`/drinks/${drink._id}`} key={drink._id} className="column is-3 card">
                <img src={drink.imgUrl}></img>
                <p>{drink.name}</p>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}


export default DrinksIndex;
