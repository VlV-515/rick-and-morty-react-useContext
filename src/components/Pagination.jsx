function Pagination() {
  return (
    <div className='mb-2 row mx-0 px-0'>
      <div className='col-3 d-flex align-items-center'>
        <b>Total results:</b>
      </div>
      <div className='col-3 d-flex align-items-center'>
        <b>Page:</b> N of X
      </div>
      <div className='col-3 d-flex align-items-center'>
        <b>Go to page:</b>
        <select name='goTo'>
          <option value='1'>1</option>
        </select>
      </div>
      <div className='col-3 d-flex align-items-center justify-content-end'>
        <button className='btn btn-success mx-2'>Next</button>
        <button className='btn btn-success'>Prev</button>
      </div>
    </div>
  )
}

export default Pagination
