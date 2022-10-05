import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading'
// import {Loading} from './Loading' - Lesson 03. This is a destructured method for exporting without a default export. Check Loading.js for more information.

// Lesson 01. Firstly this component & getUsers method allows us to store date in a component state via an ajax call.
// Lesson 02. Here we are adding a condition when rendering by creating a 'loading' state.
class App extends Component { 
  constructor(props) {
    super(props);
    // state
    this.state = {
      users: [],
      loading: false
    }
    //  bind - anytime we create a new function we need to bind.
    this.handleSubmit = this.handleSubmit.bind(this)
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
      users: [...this.state.users, ...response.data.results],
      loading: false
    })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded');
  }

  componentDidMount() {
    this.getUsers();
  }

// API data is then rendered below. In this example weve created a unique key for each user by assisgning the user.id to each user.
// We then render the user's first name in the h3 tag.
// We then render the user's email in a p tag below.
// Finally, we created a line seperating each users information using the <hr /> tag.

// 02 Here we have said if loading is false, implement api data, however, if it is true, then create a string to say "Loading..."

// Lesson 03. Here, we have passed are own string as the value for the loading message wihich will overwrite the default string. 

  render() {
    return (
      <div className="App">
        {! this.state.loading
          ? this.state.users.map(user => 
            <div key={user.id}>
              <h3>{user.name.first}</h3>
              <p>{user.email}</p>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <input type="submit" value="load users" />
              </form>
            </div>
          ) : <Loading message = "Loading, please wait."/>}
          </div>
      );
  }
}
export default App;
