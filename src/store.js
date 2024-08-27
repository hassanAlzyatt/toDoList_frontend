import { legacy_createStore as createStore } from "redux";

import reducer from "./Redux/Reducer";


export const store = createStore(reducer) 