import {
  ADD_CANDIDATES,
  ADD_TO_REJECTLIST,
  ADD_TO_SHORTLIST,
} from "../actions/actionTypes";

const initalCandidatesList = {
  candidatesLists: [],
  rejectLists: [],
  selectedLists: [],
};

export function candidate(state = initalCandidatesList, action) {
  switch (action.type) {
    case ADD_CANDIDATES:
      return {
        ...state,
        candidatesLists: action.candidates,
      };
    case ADD_TO_REJECTLIST:
      return {
        ...state,
        // rejectLists: [action., ...state.favourites],
      };
    case ADD_TO_SHORTLIST:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    default:
      return state;
  }
}
