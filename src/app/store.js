import { configureStore } from '@reduxjs/toolkit';
import homePageSlice from '../modules/HomePage/homePageSlice';

const rootReducer = {
  homePage : homePageSlice,

};

export const store = configureStore({reducer: rootReducer});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};