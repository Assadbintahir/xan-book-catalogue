import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BookPayload, IBookState } from './types';

const initialState: IBookState = {
  books: [],
  isLoading: false,
};

export const getBooksAPI = createAsyncThunk('api/v1/books', async () => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/v1/books`);
    console.log(data);
    return data;
  } catch (error) {
    return console.log('API fetch operation for books failed');
  }
});

export const getBookByIdAPI = createAsyncThunk('api/v1/book/id', async (bookID: string) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/v1/book/${bookID}`);
    return data;
  } catch {
    return console.log('API fetch operation for book by ID failed');
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}, // reducers can be added if there is some data manipulation on user interactivity
  extraReducers: (builder) => {
    // books
    builder.addCase(getBooksAPI.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBooksAPI.fulfilled, (state, action: PayloadAction<BookPayload[]>) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooksAPI.rejected, (state) => {
      state.isLoading = false;
    });

    // book by ID
    builder.addCase(getBookByIdAPI.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBookByIdAPI.fulfilled, (state, action: PayloadAction<BookPayload>) => {
      state.isLoading = false;
      state.books = [action.payload];
    });
    builder.addCase(getBookByIdAPI.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {} = bookSlice.actions;
export default bookSlice.reducer;
