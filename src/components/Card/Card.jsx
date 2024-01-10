// To use state, we need hooks
// object deconstruction
import { useState } from 'react';

function Card(props) {
  const [myName, setMyName] = useState('Alvin');
  const [count, setCount] = useState(0);
  
  
  function clickChangeName() {
    // set name to new name
    console.log('Test');
    setMyName('Alvin Graham');
  }

  function countButtonClick() {
    setCount(count + 1);
  }

  return(
    <div className="card">
    {/* create state to increment the count */}
    <button onClick={countButtonClick}>
      count is {count}
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