import { useContext } from 'react'
import { CharactersContext } from '../context/charactersContext'

const getValuesFromContext = () => {
  const {
    totalResults,
    currentPage,
    totalPages,
    urlPrevPage,
    urlNextPage,
    setCurrentPage,
    btnNextPage,
    btnPrevPage,
  } = useContext(CharactersContext)
  return {
    totalResults,
    currentPage,
    totalPages,
    urlPrevPage,
    urlNextPage,
    setCurrentPage,
    btnNextPage,
    btnPrevPage,
  }
}

function Pagination() {
  const values = getValuesFromContext()
  return (
    <div className='mb-2 row mx-0 px-0'>
      <div className='col-3 d-flex align-items-center'>
        <b>Total results: </b>
        {values.totalResults}
      </div>
      <div className='col-3 d-flex align-items-center'>
        <b>Page:</b> {values.currentPage} of {values.totalPages}
      </div>
      <div className='col-3 d-flex align-items-center'>
        <b>Go to page:</b>
        <select name='goTo'>
          <option value='1'>1</option>
        </select>
      </div>
      <div className='col-3 d-flex align-items-center justify-content-end'>
        {values.urlNextPage && (
          <button onClick={values.btnNextPage} className='btn btn-success mx-2'>
            Next
          </button>
        )}
        {values.urlPrevPage && (
          <button onClick={values.btnPrevPage} className='btn btn-success'>
            Prev
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
