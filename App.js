import { useState } from 'react';
import './App.css';

function App() {

  // let count = 0;
  const [count,setCount] = useState(0);
  
  function decreseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="App">
      <div className='Incre'>Increment && Decrement</div>
      <div className='plusMinus'>
        <button onClick = {decreseHandler} className='dec'>
          -
        </button>
        <div className='number'>
          {count}
        </div>
        <button onClick= {increaseHandler} className='inc'>
          +
        </button>
      </div>
      <button onClick={resetHandler} className='reset' >
        Reset
      </button>
    </div>
  );
}

export default App;
