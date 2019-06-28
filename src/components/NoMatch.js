import React from 'react';

const NoMatch = (props) => {
  const { pathname } = props.location
  return (
    <h1>Errorrr!!! No match for {pathname}</h1>
  )
}

export default NoMatch;