import { connect } from "react-redux";
import Card from "../Card/Card";

function Rejected(props) {
  const rejectLists = props.rejectLists;
  return (
    <div className="card-component">
      {rejectLists.length === 0 ? (
        <div> There are no Selected Candidate List Available !</div>
      ) : (
        <>
          {rejectLists.map((candidate) => (
            <div style={{ margin: "20px" }}>
              <Card candidate={candidate} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    rejectLists: state.candidate.rejectLists,
  };
}

export default connect(mapStateToProps)(Rejected);
