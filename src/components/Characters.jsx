import Card from './Card'
import { useContext } from 'react'
import { CharactersContext } from '../context/charactersContext'
import Pagination from './Pagination'

function Characters() {
  const { characters } = useContext(CharactersContext)
  return (
    <div className='row'>
      <Pagination />
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
