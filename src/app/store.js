import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../features/settingsSlice';
import plantillasReducer from '../features/plantillasSlice';
import emailsReducer from '../features/emailsSlice';
import emailTemplateReducer from '../features/emailTemplateSlice';

const store = {
  reducer: {
    settings: settingsReducer,
    plantillas: plantillasReducer,
    emails: emailsReducer,
    emailTemplate: emailTemplateReducer,
  },
};

export default configureStore(store);
