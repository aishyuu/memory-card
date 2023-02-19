import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [state, setState] = useState([
    {
      image: 'https://cdn.dashfight.com/8517d3247219a02425817ec05df5a10587126bab_265.png',
      name: 'Bridget'
    }, 
    {
      image: 'https://cdn.dashfight.com/9220345bf327095e0d86e3a9550ec835d316cde4_265.png',
      name: 'Happy Chaos'
    }, 
    {
      image: 'https://cdn.dashfight.com/7b5782af27153f44282bae1b9e6d639823d6cd1f_265.png',
      name: 'Faust'
    }, 
    {
      image: 'https://cdn.dashfight.com/51fbcda82907b6d4ad57688752f92ba908b327ed_265.png',
      name: 'Jack-O'
    }, 
    {
      image: 'https://cdn.dashfight.com/642ede51d2a16ddc85a5157190240f83a646d594_265.png',
      name: 'May'
    }, 
    {
      image: 'https://cdn.dashfight.com/af9a1a8b9fc4f3673f46922b35f2163a3df24864_265.png',
      name: 'Sol'
    }, 
    {
      image: 'https://cdn.dashfight.com/117d64bab8e4ac9b87d46beec56068ea5751f86d_265.png',
      name: 'Testament'
    }, 
    {
      image: 'https://cdn.dashfight.com/19f182be544e01541fbea0c1add3b77665136e43_265.png',
      name: 'Nagoriyuki'
    }
  ])

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [characterStack, setCharacterStack] = useState([]);

  function checkCondition(e) {
    const clickedCharacter = e.currentTarget.innerText;
    if(characterStack.includes(clickedCharacter)) {
      if(score > bestScore) {
        setBestScore(score);
      }
      setCharacterStack([])
      setScore(0);
    } else {
      setCharacterStack(prev => [...prev, clickedCharacter]);
      setScore(prev => prev+1)
    }
    handleShuffle();
  }

  function handleShuffle() {
    console.log("clicked!")
    let shuffle = state;
    shuffle = shuffle.sort((a, b) => 0.5 - Math.random());
    setState([...shuffle]);
  }

  return (
    <div className="App">
      <Header />
      <h1 className="scoreDisplay">Score: {score}</h1>
      <h1 className="scoreDisplay">Best: {bestScore}</h1>
      <div className="container">
        {state.map(obj => {
          return(
            <div className="cardContainer" onClick={checkCondition}>
              <img src={obj.image} alt="" />
              <div className="cardFooter">
                <p>{obj.name}</p>
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App
