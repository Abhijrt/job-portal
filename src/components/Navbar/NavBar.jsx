import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToRejectList,
  addToShortList,
  handleCandidateSearch,
} from "../../actions";
import "./navbar.css";

function NavBar(props) {
  const [searchText, setSearchText] = useState("");
  const { showSearchResults, results: candidate } = props;

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(handleCandidateSearch(searchText));
  };

  const handleCandidateReject = () => {
    dispatch(addToRejectList(candidate[0]));
  };

  const handleCandidateSelect = () => {
    dispatch(addToShortList(candidate[0]));
  };

  return (
    <nav>
      <label className="logo">
        <Link className="link" to="/">
          Job Portal
        </Link>
      </label>
      {/* <div className="search-container"> */}
      <input onChange={handleSearchChange} />
      <button id="search-btn" onClick={handleSearchClick}>
        Search
      </button>

      {showSearchResults && (
        <div className="search-results">
          <div className="search-result">
            <img src={candidate[0].Image} alt="search-pic" />
            <div className="movie-info">
              <span>{candidate[0].name}</span>
            </div>
            <div>
              <button
                className="btn"
                onClick={() => handleCandidateSelect(candidate)}
              >
                Select
              </button>
              <button
                className="btn"
                onClick={() => handleCandidateReject(candidate)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
      <ul>
        <li>
          <Link className="link" to="/shortlisted">
            Selection
          </Link>
        </li>
        <li>
          <Link className="link" to="/rejected">
            Rejection
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    results: state.candidate.results,
    showSearchResults: state.candidate.showSearchResults,
  };
}

export default connect(mapStateToProps)(NavBar);
