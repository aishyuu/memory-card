import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState(['1', '2', '3', '4', '5', '6', '7', '8'])

  function handleShuffle() {
    console.log("clicked!")
    let shuffle = state;
    shuffle = shuffle.sort((a, b) => 0.5 - Math.random());
    setState([...shuffle]);
  }

  return (
    <div className="App">
      <div className="container">
        {state.map(obj => {
          return(
            <div className="cardContainer" onClick={handleShuffle}>
              {obj}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
