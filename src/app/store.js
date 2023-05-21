import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  user: userReducer,
});
export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
