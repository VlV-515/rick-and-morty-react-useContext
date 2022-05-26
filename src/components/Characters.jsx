import { useContext } from 'react'
import { CharactersContext } from '../context/charactersContext'

function Characters() {
  const test = useContext(CharactersContext)
  return (
    <div className='row'>
      <div className='col-4'>
        {test}
        <h2>Name</h2>
        <p>Image</p>
      </div>
    </div>
  )
}

export default Characters
