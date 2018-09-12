import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import {Link} from 'ract-router-dom';

function DrinkForm({fileChangedHandler,handleLocation, handleSubmit, handleChange, drink}){
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">Drink Name</label>
          <input placeholder="Falooda" className="input" name="name"
            value={drink.name || ''} onChange={handleChange}/>
        </div>
        <label className="label" htmlFor="location">add a store location</label>
        <a onClick={handleLocation} className="button is-dark"><FontAwesomeIcon
          icon="search-location"/></a>
        <div>
          <label className="label" htmlFor="name">Add drink image</label>
          <input type="file" onChange={fileChangedHandler}/>
          {/* <button onClick={uploadHandler}>Upload a Picture!</button> */}
        </div>
        <button className="button is-success is-rounded">Submit</button>
      </form>
    </div>
  );
}
{/*<FontAwesomeIcon
  icon="image"/>*/}
export default DrinkForm;
