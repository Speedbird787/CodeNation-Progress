// counter  challenge

const Count = ({value, moreClick, lessClick}) => {
    return (
      <div className="count">
        <button onClick={moreClick}>+</button>
        <p className="digit">{value}</p>
        <button onClick={lessClick}>-</button>
      </div>
    )
  }
  
  export default Count;