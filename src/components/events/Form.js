import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
// import {Link} from 'ract-router-dom';

function EventForm({handleDayChange,handleSubmit, handleChange, event}){
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">Event Name</label>
        <input placeholder="Jam at Mine" className="input" name="name"
          value={event.name || ''} onChange={handleChange}/>
      </div>
      <div className="field">
        <label className="label" htmlFor="date">Please type a day:</label>
        <DayPickerInput onDayChange={handleDayChange} />
      </div>
    
      <button className="button is-success is-rounded">Submit</button>
    </form>
  );
}


export default EventForm;
