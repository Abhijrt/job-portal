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
        rejectLists: [action.candidate, ...state.rejectLists],
      };
    case ADD_TO_SHORTLIST:
      return {
        ...state,
        selectedLists: [action.candidate, ...state.selectedLists],
      };
    default:
      return state;
  }
}
