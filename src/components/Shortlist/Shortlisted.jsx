import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

function Shortlisted(props) {
  const selectedLists = props.selectedLists;

  return (
    <div className="card-component">
      {selectedLists.length === 0 ? (
        <div> There are no Selected Candidate List Available !</div>
      ) : (
        <>
          {selectedLists.map((candidate) => (
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
    selectedLists: state.candidate.selectedLists,
  };
}

export default connect(mapStateToProps)(Shortlisted);
