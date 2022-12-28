import { useState } from 'react';
import './App.css';


function App() {

  const [list, setList] = useState([]);

  const handleClick = (event) => {
    
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    //setList();
    console.log(newDot)
  }

  return (
    
    <div id='page' onClick={handleClick}>
      <span className='dot'></span>
    </div>

  );
}

export default App;
