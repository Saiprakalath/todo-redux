import * as actionTypes from "../actionType";
import initialState from "../initialState";

export default function taskReducer(state = initialState.dataTask, action) {
  switch (action.type) {
    case actionTypes.GET_TASK:
      return { ...state, task: action.data["data"] };
    default:
      return state;
  }
}
