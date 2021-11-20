import "./card.css";

function Card(props) {
  const { Image, name, id } = props.candidate;
  return (
    <div className="container">
      <img src={Image} alt="name" />
      <div className="name-container">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Card;
