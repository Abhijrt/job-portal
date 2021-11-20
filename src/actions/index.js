import {
  ADD_CANDIDATES,
  ADD_TO_REJECTLIST,
  ADD_TO_SHORTLIST,
  ADD_SEARCH_RESULT,
} from "./actionTypes";

// action creators
export function addCandidates(candidates) {
  return {
    type: ADD_CANDIDATES,
    candidates,
  };
}

export function addToRejectList(candidate) {
  return {
    type: ADD_TO_REJECTLIST,
    candidate,
  };
}

export function addToShortList(candidate) {
  return {
    type: ADD_TO_SHORTLIST,
    candidate,
  };
}

export function handleMovieSearch(searchText) {
  return function (dispatch) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        // dispatch action to save search results in store
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
