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
    btnSelectPage,
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
    btnSelectPage,
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
        <select name='goTo' onChange={(e) => values.btnSelectPage(e)}>
          <option value={values.currentPage}>{values.currentPage}</option>
          {Array.from(Array(values.totalPages).keys()).map((value) => {
            return value + 1 != values.currentPage ? (
              <option key={value + 1} value={value + 1}>
                {value + 1}
              </option>
            ) : null
          })}
        </select>
      </div>
      <div className='col-3 d-flex align-items-center justify-content-end'>
        {values.urlPrevPage && (
          <button onClick={values.btnPrevPage} className='btn btn-success'>
            Prev
          </button>
        )}
        {values.urlNextPage && (
          <button onClick={values.btnNextPage} className='btn btn-success mx-2'>
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
