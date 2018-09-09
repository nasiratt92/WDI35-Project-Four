import React from 'react';
// import {Link} from 'ract-router-dom';

function DrinkForm({handleSubmit, handleChange, drink}){
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">Drink Name</label>
        <input placeholder="Falooda" className="input" name="name"
          value={drink.name || ''} onChange={handleChange}/>
      </div>
      <button className="button is-success is-rounded">Submit</button>
    </form>
  );
}


export default DrinkForm;
