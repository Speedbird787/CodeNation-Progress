// task 4
const Card = ({image, title}) => {
    return (
      <div>
        <img className="image" src={image} alt={title}/>
        <h3>{title}</h3>
      </div>
    )
  }
  
  export default Card;
