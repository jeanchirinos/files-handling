import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../features/settingsSlice';

const store = {
  reducer: {
    settings: settingsReducer,
  },
};

export default configureStore(store);
