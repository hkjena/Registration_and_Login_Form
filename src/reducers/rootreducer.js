import { combineReducers } from "redux";
import loginreducer from "./loginreducer";
import registerreducer from "./registerreducer";

const rootReducer = combineReducers({
  login: loginreducer,
  register: registerreducer
});

export default rootReducer;
