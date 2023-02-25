const Card = ({image, selected, onClick}) => {

  return (
    <div className="card">
      <div className={selected && 'selected'}>
          <img src={image} className="card-face"/>
          
          <img 
          src={'public\assets\fireship.png'}
          className='card-back'
          onClick={onClick}
          />
      </div>
    </div>
  )
}

export default Card