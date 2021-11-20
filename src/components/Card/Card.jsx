import "./card.css";

function Card(props) {
  const { Image, name, id } = props.candidate;
  const { singleCandidate = false } = props;
  return (
    <>
      <div className="container">
        <img src={Image} alt="name" />
        <div className="name-container">
          <span>{name}</span>
        </div>
      </div>
      {singleCandidate && (
        <div className="btn-container">
          <button className="btn">Select</button>
          <button className="btn">Reject</button>
        </div>
      )}
    </>
  );
}

export default Card;
