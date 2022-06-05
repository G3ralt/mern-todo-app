import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()).concat(thunk),
});
