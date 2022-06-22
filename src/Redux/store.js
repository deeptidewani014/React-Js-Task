import { createStore } from "redux";

// import root reducers
import rootReducer from "./Reducers";

//
const store = createStore(rootReducer);

export { store };
