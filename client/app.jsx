import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form.jsx';
import $ from 'jquery';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(event);
  }

  componentDidMount() {
    console.log('Component did mount');
    let get = $.get( "http://localhost:3000/", (data) => {
      console.log("Success!");
      console.log(data);
    }).fail(() => {
        console.log("Error!");
      });
  }

  render() {
    return (
        <Form handleSubmit={this.handleSubmit} />
      );
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));
