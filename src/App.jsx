import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title'
import Button from './components/Button'
import Dropdown from './components/Dropdown'
import JokeText from './components/JokeText'

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");
  const [clicked, setClicked] = useState(false);
  let linkJoke = "https://api.chucknorris.io/jokes/categories";
  fetch(linkJoke).then((resp) => {
    return resp.json();
  }).then(data =>{
    data.unshift("random");
    setCategories(data);
  }).catch((e) =>{
    console.log(e)
  })

  function generateJoke(){
    let selectedCategory = document.getElementById("dropdown").value
    let url = "https://api.chucknorris.io/jokes/" + (selectedCategory === "random" ? "random":("random?category=") + selectedCategory);
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setJoke(data.value);
      setClicked(true);
    }).catch((e)=>{
      console.log(e)
    })
  }

  function copyJoke(){
    let jokeText = document.getElementById("JokeText");
    navigator.clipboard.writeText(jokeText.innerText);
  }

  return (
    <div className="App">
      <Title>Chuck Norris API Joke Generator</Title>
          <Button id= "carica" text="Carica Joke" callback={generateJoke}></Button>
          <Dropdown id= "dropdown" values={categories}></Dropdown>
          <JokeText id= "JokeText">{joke}</JokeText>{joke}
          <Button id= "copia" text="Copia Joke" variant ={ clicked === true ? "disabled" : undefined } callback={copyJoke}></Button>
          <Button variant={ clicked === "" ? "hover" : undefined } callback={copyJoke}></Button>
    </div>
  )
}

export default App
