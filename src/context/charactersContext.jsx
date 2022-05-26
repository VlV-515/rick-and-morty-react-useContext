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
    setCurrentPage(Number(currentPage) + 1)
    setCurrentURL(urlNextPage)
    getDataInfo(urlNextPage)
  }

  const btnPrevPage = () => {
    setCurrentPage(Number(currentPage) - 1)
    setCurrentURL(urlPrevPage)
    getDataInfo(urlPrevPage)
  }

  const btnSelectPage = (e) => {
    const page = e.target.value ?? 1
    setCurrentPage(page)
    setCurrentURL(`${URL_API}${page}`)
    getDataInfo(`${URL_API}${page}`)
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
        btnSelectPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
