import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, Data } from './types';

// The initial state of login feature
export const initialState: ContainerState = {
  results: [],
  saved: [],
};

const authSlice = createSlice({
  name: 'homepageState',
  initialState,
  reducers: {
    getData(state) {},
    getDataSuccess(state, action: PayloadAction<Data>) {
      state.results = action.payload.results;
      state.saved = action.payload.saved;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authSlice;
