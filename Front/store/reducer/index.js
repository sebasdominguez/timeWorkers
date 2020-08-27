import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registeReducer";
import inicioReducer from "./inicioReducer";
import registryReducer from "./registryReducer";

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  inicio: inicioReducer,
  workRegistry: registryReducer,
});
