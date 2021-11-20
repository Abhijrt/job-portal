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

export function handleCandidateSearch(searchText) {
  return {
    type: ADD_SEARCH_RESULT,
    searchText,
  };
}
