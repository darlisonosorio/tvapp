
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";

import serie from '../modules/serie/store/reducer';
import person from '../modules/actor/store/reducer';

const RootReducer = combineReducers({
  serie,
  person,
});

export type RootState = ReturnType<typeof RootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const configureStore = () => createStore(RootReducer);

const store = configureStore();

export default store;
