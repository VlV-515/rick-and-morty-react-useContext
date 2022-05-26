function Card({ name, image, species, status }) {
  return (
    <div className='card mb-4'>
      <img className='card-img-top' src={image} alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          <b>Species: </b>
          {species}
          <br />
          <b>status: </b>
          {status}
        </p>
      </div>
    </div>
  )
}

export default Card
