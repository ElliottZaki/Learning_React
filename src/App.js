import React, { Component } from 'react';
import axios from 'axios';

// 01. Firstly this component & getUsers method allows us to store date in a component state via an ajax call.
// 02. Here we are adding a condition when rendering by creating a 'loading' state.
class App extends Component { 
  constructor(props) {
    super(props)
    // state
    this.state = {
      users: [],
      loading: false
    }
  }

// The getUsers method can be called in the componentDidMount method.
// 02. Here we have stated that when api is called the loading state will be implemented and turned to true.
// 02.1 Once, the api call has been completed, the loading state will be be set to false again. 

  getUsers() {
    this. setState({
      loading: true
    })
    axios('https://randomuser.me/api/?nat=US&results=5')
    .then(response => this.setState({
      users: response.data.results,
      loading: false
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

// 02  Here we have said if loading is false, implement api data, however, if it is true, then create a string to say "Loading..."

  render() {
    return (
      <div className="App">
        {! this.state.loading
          ? this.state.users.map(user => 
            <div key={user.id}>
              <h3>{user.name.first}</h3>
              <p>{user.email}</p>
              <hr />
            </div>
          ) : 'Loading...'}
          </div>
      );
  }
}
export default App;
