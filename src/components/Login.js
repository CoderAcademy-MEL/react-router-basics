import React from 'react';
import axios from 'axios'

class Login extends React.Component {
  state = {}

  authenticate = (event) => {
    event.preventDefault()
    // send the values we have from state to the backend
    axios.post("http://localhost:5000/auth/login", this.state)
      .then((response) => {
        const token = response.data.token
        localStorage.setItem('token', token)
      })
      .catch((err) => {
        this.setState({
          errorMessage: `wrong credentials ${err.message}`
        })
      })
  }

  logout = () => {
    localStorage.removeItem('token')
  }

  handleInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <>
        <form>
          <label>Username</label>
          <input type="text" name="username" id="username" onChange={this.handleInput} />
          <label>Password</label>
          <input type="password" name="password" id="password" onChange={this.handleInput}/>
          <input type="submit" value="Submit" onClick={this.authenticate} />
        </form>
        <button onClick={this.logout}>Log out</button>
        {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}
      </>
    )  
  }  
}

export default Login;