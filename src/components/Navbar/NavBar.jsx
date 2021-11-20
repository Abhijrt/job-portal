import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar(props) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = () => {};

  const handleSearchClick = () => {};

  const { showSearchResults = false } = props;
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
            {/* <img src={movie.Poster} alt="search-pic" />
              <div className="movie-info">
                <span>{movie.Title}</span>
                <button onClick={() => this.handleAddToMovies(movie)}>
                  Add to Movies
                </button>
              </div> */}
          </div>
        </div>
      )}
      {/* </div> */}
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

export default NavBar;
