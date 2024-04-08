import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGlasses = createAsyncThunk('glasses/fetchGlassesStatus', async (id) => {
  try {
    let url = import.meta.env.VITE_BACKEND_URL;
    if (id) {
      url += `/glasses/${id}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
});

const STATUS = {
  Loading: 'pending',
  Success: 'success',
  Error: 'error',
};

const initialState = {
  items: [],
  status: STATUS.Loading,
};

const glassesSlice = createSlice({
  name: 'glasses',
  initialState,
  reducers: {
    clearItems(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGlasses.pending, (state) => {
      state.status = STATUS.Loading;
      state.items = [];
    });
    builder.addCase(fetchGlasses.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = STATUS.Success;
    });
    builder.addCase(fetchGlasses.rejected, (state) => {
      state.status = STATUS.Error;
      state.items = [];
    });
  },
});

export const { clearItems } = glassesSlice.actions;
export default glassesSlice.reducer;
