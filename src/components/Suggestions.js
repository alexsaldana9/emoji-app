import React from 'react';

const Suggestions = (props) => {
  const options = props.results.map((r, idx) => (
    <li key={idx}>
      {r.char}
      <p>{r.keywords}</p>
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions


//https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
