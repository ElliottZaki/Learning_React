import React, { Component } from 'react';
import axios from 'axios';

// 01. Firstly this component & getUsers method allows us to store date in a component state via an ajax call.
class App extends Component { 
  constructor(props) {
    super(props)
    // state
    this.state = {
      users: []
    }
  }

// The getUsers method can be called in the componentDidMount method

  getUsers() {
    axios('https://randomuser.me/api/?nat=US&results=5')
    .then(response => this.setState({
      users: response.data.results
    })
    );
  }

  componentDidMount() {
    this.getUsers();
  }

// API data is then rendered below. In this example weve created a unique key for each user by assisgning the user.id to each user.
// We then render the user's first name in the h3 tag.
// We then render the user's email in a p tag below.
// Finally, we created a line seperating each users information using the <hr /> tag.

  render() {
    return (
      <div className="App">{this.state.users.map(user => 
        <div key={user.id}>
          <h3>{user.name.first}</h3>
          <p>{user.email}</p>
          <hr />
        </div>
      )}</div>
    );
  }
}
export default App;
