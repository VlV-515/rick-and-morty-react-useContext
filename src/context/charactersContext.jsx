import { createContext, useEffect, useState } from 'react'
import Axios from 'axios'

export const CharactersContext = createContext()

function CharactersContextProvider({ children }) {
  const URL_API = 'https://rickandmortyapi.com/api/character/?page='
  const [characters, setCharacters] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentURL, setCurrentURL] = useState(`${URL_API}1`)
  const [urlNextPage, setUrlNextPage] = useState('')
  const [urlPrevPage, setUrlPrevPage] = useState('')
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    getDataInfo(currentURL)
  }, [])

  const setData = (data) => {
    console.log(data)
    setCharacters(data.results)
    setTotalResults(data.info.count)
    setTotalPages(data.info.pages)
    setUrlNextPage(data.info.next)
    setUrlPrevPage(data.info.prev)
  }

  const getDataInfo = (page) => {
    Axios.get(page).then((res) => setData(res.data))
  }

  const btnNextPage = () => {
    setCurrentPage(currentPage + 1)
    setCurrentURL(urlNextPage)
    getDataInfo(urlNextPage)
  }

  const btnPrevPage = () => {
    setCurrentPage(currentPage - 1)
    setCurrentURL(urlPrevPage)
    getDataInfo(urlPrevPage)
  }

  return (
    <CharactersContext.Provider
      value={{
        characters,
        totalResults,
        currentPage,
        totalPages,
        urlNextPage,
        urlPrevPage,
        setCurrentPage,
        btnNextPage,
        btnPrevPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
