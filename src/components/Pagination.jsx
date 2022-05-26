function Pagination() {
  return (
    <div className='mb-2 row mx-0 px-0'>
      <div className='col-3'>
        <b>Total results:</b>
      </div>
      <div className='col-3'>
        <b>Page:</b> N of X
      </div>
      <div className='col-3'>
        <b>Go to page:</b>
      </div>
      <div className='col-3 text-end'>
        <button className='btn btn-success mx-2'>Next</button>
        <button className='btn btn-success'>Prev</button>
      </div>
    </div>
  )
}

export default Pagination
