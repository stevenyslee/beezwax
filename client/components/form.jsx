import React from 'react';
import ReactDOM from 'react-dom';
 
const Form = (props) => {
  return (    
    <form id="form" onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit(e);
      }
    }>
      <h2>Basic Form</h2>
      <label>
        <input type="text" name="firstName" className="user-field" placeholder="First Name" onChange={props.handleChange} />
      </label>
      <input type="submit" value="Submit" id="submit" />
    </form>
    );
}

export default Form;
