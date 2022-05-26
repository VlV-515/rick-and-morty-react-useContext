import { createContext } from 'react'

export const CharactersContext = createContext()

function CharactersContextProvider({ children }) {
  return (
    <CharactersContext.Provider value={'Rick and Morty'}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
