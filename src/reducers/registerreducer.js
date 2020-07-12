import {
  REGISTER_NAME_CHANGE,
  REGISTER_EMAIL_CHANGE,
  REGISTER_PASSWORD_CHANGE
} from "../constants";

let initialState = [{ name: "", email: "", password: "" }];

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_NAME_CHANGE:
      return state.map(x => (x.name = action.payload));
    case REGISTER_EMAIL_CHANGE:
      return state.map(x => (x.email = action.payload));
    case REGISTER_PASSWORD_CHANGE:
      return state.map(x => (x.password = action.payload));
    default:
      return state;
  }
};

export default registerReducer;
