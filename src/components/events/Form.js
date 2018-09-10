import React from 'react';
// import {Link} from 'ract-router-dom';

function EventForm({handleSubmit, handleChange, event}){
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">Event Name</label>
        <input placeholder="Jam at Mine" className="input" name="name"
          value={event.name || ''} onChange={handleChange}/>
      </div>
      <button className="button is-success is-rounded">Submit</button>
    </form>
  );
}


export default EventForm;
