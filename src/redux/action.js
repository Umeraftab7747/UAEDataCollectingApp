export const FETCH_USER_DATA = "FETCH_USER_DATA";

export const SetUserData = (UserData) => (dispatch) => {
  return dispatch({
    type: FETCH_USER_DATA,
    payload: UserData,
  });
};
