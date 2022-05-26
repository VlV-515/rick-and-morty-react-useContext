import { createContext, useEffect, useState } from 'react'
import Axios from 'axios'

export const CharactersContext = createContext()

function CharactersContextProvider({ children }) {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/').then((res) => {
      if (res.status == 200) {
        setCharacters(res.data.results)
      }
    })
  }, [])

  return (
    <CharactersContext.Provider
      value={{
        characters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
