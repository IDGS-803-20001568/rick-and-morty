import { useState } from 'react';
import './index.css'; // Importa el archivo CSS

import imagenRickMorty from './img/rick-mory.jpg'
import './App.css'
import Characters from './components/characters';

const App = () => {
  //Definimos un state para almacenar los datos de los personajes
  const [characters, setCharacters]  = useState(null);

  //Realizar peticiones a la api
  const regApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    // console.log("Click")

    //Recuperando personajes
    const characterApi = await api.json();
    console.log(characterApi);
    setCharacters(characterApi.results);  
  }

  return (
    <div className='App'>
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {
          characters ? (
            <Characters
              characters={characters} setCharacters = {setCharacters}
            />
          ) : (
            <>
              <img src={imagenRickMorty} alt="Rick&Morty" className='img-home' />
              <br />
              <button onClick={regApi} className="btn-search">Cargar Personajes</button>
            </>
          )
        }
      </header>
    </div>
  )
}

export default App
