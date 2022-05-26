import Card from './Card'
import { useContext } from 'react'
import { CharactersContext } from '../context/charactersContext'

function Characters() {
  const { characters } = useContext(CharactersContext)
  console.log(characters)
  return (
    <div className='row'>
      {characters.map((character, index) => (
        <div className='col-3' key={index}>
          <Card
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
          />
        </div>
      ))}
    </div>
  )
}

export default Characters
