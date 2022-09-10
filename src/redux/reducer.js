import { FETCH_USER_DATA } from "./action.js";

const initialState = {
  UserData: [],
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_DATA:
      return { ...state, UserData: action.payload };

    default:
      return state;
  }
}

export default dataReducer;
