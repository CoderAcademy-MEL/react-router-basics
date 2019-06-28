import React from 'react';
import './App.css';
import Routes from './Routes'

class App extends React.Component {
  state = {}

  componentDidMount() {
    const randomNumber = Math.floor((Math.random() * 100) + 1);
    this.setState({
      randomNumber
    })
  }

  render() {
    const { randomNumber } = this.state
    // console.log(randomNumber)
    if (!randomNumber) {
      return null
    } else {
      return (
        <Routes randomNumber={randomNumber} />
      ) 
    }
  }
}

export default App;
