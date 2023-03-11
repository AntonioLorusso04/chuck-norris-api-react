import { useState } from 'react'
import Title from './components/Title'
import './styles/App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  
  const [joke, setJoke] = useState("")

  let loadJokeCallback = function(){
    console.log()
  }

  return (
    <div className="App">
      <h1>Chuck Norris API Joke Generator</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt animi, 
        consequatur doloribus ad sed sunt quasi voluptatum atque omnis porro nostrum 
        molestiae repellendus exercitationem numquam sapiente maxime, 
        corrupti quis veritatis.</p>
        <div class="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <Button text="Carica Joke" callback={loadTextCallback}></Button>
          <Button text="Copia Joke" variant ={ joke === "" ? "disabled" : undefined } callback={copyTextCallback}></Button>
          <Button variant={ joke === "" ? "hover" : undefined } callback={loadtextCallBack}></Button>
        </div>
    </div>
  )
}

export default App
