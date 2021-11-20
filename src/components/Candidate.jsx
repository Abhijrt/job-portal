import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "./Card/Card";

function Candidate(props) {
  const [candidate, setCandidate] = useState({});
  const params = useParams();
  const { candidatesLists } = props;

  useEffect(() => {
    const filteredArray = candidatesLists.filter(
      (item) => item.id == params.id
    );

    const candidateObj = {
      Image: filteredArray[0].Image,
      name: filteredArray[0].name,
      id: filteredArray[0].id,
    };
    setCandidate(candidateObj);
  }, []);

  return (
    <div className="single-candidate">
      <Card candidate={candidate} singleCandidate={true} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    candidatesLists: state.candidate.candidatesLists,
  };
}

export default connect(mapStateToProps)(Candidate);
