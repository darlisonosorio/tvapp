
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";

import serie from './serie/reducer';


const RootReducer = combineReducers({
  serie,
});

export type RootState = ReturnType<typeof RootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const configureStore = () => createStore(RootReducer);

const store = configureStore();

export default store;
