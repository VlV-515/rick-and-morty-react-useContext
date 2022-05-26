import { useContext } from 'react'
import { CharactersContext } from '../context/charactersContext'

function Characters() {
  const { characters } = useContext(CharactersContext)
  console.log(characters)
  return (
    <div className='row'>
      {characters.map((character, index) => (
        <div className='col-3' key={index}>
          <div className='card mb-4'>
            <img
              className='card-img-top'
              src={character.image}
              alt={character.name}
            />
            <div className='card-body'>
              <h5 className='card-title'>{character.name}</h5>
              <p className='card-text'>
                <b>Species: </b>
                {character.species}
                <br />
                <b>status: </b>
                {character.status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters
