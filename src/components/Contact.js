import React from 'react';
import { Redirect } from 'react-router-dom'

const Contact = (props) => {
  const { randomNumber } = props
  console.log(randomNumber)
  if (randomNumber < 50) {
    // do the redirect
    return <Redirect to="/" />
  } else {
    return (
      <form>
        <label>Name</label>
        <input type="text" name="name" id="name"/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Contact;