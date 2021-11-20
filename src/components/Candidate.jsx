import { useState } from "react";
import Card from "./Card/Card";

function Candidate(props) {
  return <Card candidate={props.candidate} />;
}

export default Candidate;
