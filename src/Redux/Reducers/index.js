import { combineReducers } from "redux";

// import reducers
import SidePanelReducer from "./Sidepanel/sidepanel";

// combine ll reducers
const rootReducer = combineReducers({
  sidepanel: SidePanelReducer,
});

export default rootReducer;
