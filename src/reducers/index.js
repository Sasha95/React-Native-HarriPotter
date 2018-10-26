import { combineReducers } from "redux";
import appData from "./dataReducer";
import pushPhoto from "./pushPhoto";

const rootReducer = combineReducers({
  appData,
  pushPhoto
});

export default rootReducer;
