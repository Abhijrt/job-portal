import React, { useState } from "react";

function Shortlisted() {
  const [slectedList, setSelectedList] = useState([]);

  return (
    <div>
      {slectedList.length === 0 ? (
        <div> There are no Selected Candidate List Available !</div>
      ) : null}
    </div>
  );
}

export default Shortlisted;
