import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card";

function Home() {
  const [candidatesList, setCandidateList] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = () => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    )
      .then((res) => res.json())
      .then((data) => setCandidateList(data));
  };

  console.log(candidatesList);
  return (
    <div className="card-component">
      {candidatesList.map((candidate) => (
        <div style={{ margin: "20px" }}>
          <Link to={`/candidate/${candidate.id}`}>
            <Card candidate={candidate} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
