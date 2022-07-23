import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/books/bookSlice';

export const store = configureStore({
  reducer: {
    books: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
