import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Hello from home view <span role="img" aria-label="emoji">🤪</span>!</h1>
      <Link to="/projects">Go to projects</Link>
    </>
  )
}

export default Home;