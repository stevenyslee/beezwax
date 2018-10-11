import React from 'react';
import ReactDOM from 'react-dom';
 
const Form = (props) => {
  return (    
    <form id="form" onSubmit={(e) => {e.preventDefault(); props.handleSubmit(e);}}>
      <h2>Basic Form</h2>
      <label>
        <input type="text" name="first-name" className="user-field" placeholder="First Name" />
      </label>
      <label>
        <input type="text" name="last-name" className="user-field" placeholder="Last Name" />
      </label>
      <label>
        <input type="text" name="email" className="user-field" placeholder="Email" />
      </label>
      <label>
        <input type="text" name="address" className="user-field" placeholder="Address" />
      </label>
      <label>
        <input type="text" name="phone-number" className="user-field" placeholder="Phone Number" />
      </label>
      <input type="submit" value="Submit" id="submit" />
    </form>
    );
}

export default Form;
