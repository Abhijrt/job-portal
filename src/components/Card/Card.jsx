import { useDispatch } from "react-redux";
import { addToRejectList, addToShortList } from "../../actions";
import { Navigate } from "react-router-dom";
import "./card.css";

function Card(props) {
  const { Image, name, id } = props.candidate;
  const { singleCandidate = false } = props;

  const dispatch = useDispatch();

  const handleSelection = () => {
    dispatch(addToShortList(props.candidate));
    return <Navigate to="/" />;
  };

  const handleRejection = () => {
    dispatch(addToRejectList(props.candidate));
    return <Navigate to="/" />;
  };

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
          <button className="btn" onClick={handleSelection}>
            Select
          </button>
          <button className="btn" onClick={handleRejection}>
            Reject
          </button>
        </div>
      )}
    </>
  );
}

export default Card;
