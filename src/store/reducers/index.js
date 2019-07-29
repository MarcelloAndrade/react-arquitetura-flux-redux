import { combineReducers } from "redux";

import todos from "./todos";
import favorites from "./favorites";

export default combineReducers({
  todos,
  favorites
});
