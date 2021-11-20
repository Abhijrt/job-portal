import {
  ADD_CANDIDATES,
  ADD_SEARCH_RESULT,
  ADD_TO_REJECTLIST,
  ADD_TO_SHORTLIST,
} from "../actions/actionTypes";

const initalCandidatesList = {
  candidatesLists: [],
  rejectLists: [],
  selectedLists: [],
  results: [],
  showSearchResults: false,
};

export function candidate(state = initalCandidatesList, action) {
  console.log(action);
  console.log("ON", state);
  switch (action.type) {
    case ADD_CANDIDATES:
      return {
        ...state,
        candidatesLists: action.candidates,
      };
    case ADD_TO_REJECTLIST:
      return {
        ...state,
        rejectLists: [action.candidate, ...state.rejectLists],
        showSearchResults: false,
      };
    case ADD_TO_SHORTLIST:
      return {
        ...state,
        selectedLists: [action.candidate, ...state.selectedLists],
        showSearchResults: false,
      };
    case ADD_SEARCH_RESULT:
      const filteredArray = state.candidatesLists.filter(
        (item) => item.name === action.searchText
      );
      return {
        ...state,
        results: [...filteredArray, ...state.results],
        showSearchResults: true,
      };
    default:
      return state;
  }
}
