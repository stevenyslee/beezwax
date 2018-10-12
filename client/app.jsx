import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form.jsx';
import axios from 'axios';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      wordCount: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    // $.ajax({
    //   type: "POST",
    //   url: "http://localhost:3000/",
    //   // The key needs to match your method's input parameter (case-sensitive).
    //   data: JSON.stringify({firstName: this.state.firstName}),
    //   contentType: "application/json; charset=utf-8",
    //   dataType: "json",
    //   success: (data) => {
    //     this.setState({
    //       wordCount: data
    //     });
    //   }
    // });
    axios.post('/', {
      firstName: this.state.firstName
    })
    .then((response) => {
      this.setState({
        wordCount: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });;

  }

  handleChange(event) {
    // console.log(event.target.value);
    // let key = event.target.name;
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }

  componentDidMount() {
    console.log('Component did mount');
    // let get = $.get( "http://localhost:3000/", (data) => {
    //   console.log("Success!");
    //   console.log(data);
    // }).fail(() => {
    //     console.log("Error!");
    //   });
  }

  render() {
    return (
      <div id="container">
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        {this.state.wordCount.map((element) => {
          return (
            <div key={element[0]}><span>{element[0]}: {element[1]}</span></div>
            );
        })}
      </div>
      );
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));
