import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../features/settingsSlice';
import plantillasReducer from '../features/plantillasSlice';

const store = {
  reducer: {
    settings: settingsReducer,
    plantillas: plantillasReducer,
  },
};

export default configureStore(store);
