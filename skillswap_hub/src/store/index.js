import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import skillsReducer from './slices/skillsSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
    skills: skillsReducer,
  },
  // Additional middleware can be added here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      // If we need to ignore certain action types or paths
      // ignoredActions: [],
      // ignoredPaths: [],
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
