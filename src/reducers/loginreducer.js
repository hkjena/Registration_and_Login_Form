import { LOGIN_USERNAME_CHANGE, LOGIN_PASSWORD_CHANGE } from "../constants";

let initialState = [{ username: "", pssword: "" }];

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USERNAME_CHANGE:
      return state.map(x => (x.username = action.payload));
    case LOGIN_PASSWORD_CHANGE:
      return state.map(x => (x.password = action.payload));
    default:
      return state;
  }
};

export default loginReducer;
