// To use state, we need hooks
// object deconstruction
import { useState } from 'react';

function Card(props) {
  const [myName, setMyName] = useState('Alvin');

  function clickChangeName() {
    // set name to new name
    console.log('Test');
    setMyName('Alvin Graham');
  }

  return(
    <div className="card">
    <button>
      count is 0
    </button>
    <p>{props.globalName ? props.globalName : myName}</p>
    <button onClick={clickChangeName}>Change Name</button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  );
}

export default Card;