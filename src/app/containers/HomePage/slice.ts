import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, Data } from './types';
import remove from 'lodash/remove';
import { Property } from 'types/Property';

// The initial state of login feature
export const initialState: ContainerState = {
  results: [],
  saved: [],
};

const homepageSlice = createSlice({
  name: 'homepageState',
  initialState,
  reducers: {
    getData(state) {},
    getDataSuccess(state, action: PayloadAction<Data>) {
      state.results = action.payload.results;
      state.saved = action.payload.saved;
    },
    addProperty(state, action: PayloadAction<Property>) {
      state.saved.push(action.payload);
      remove(state.results, p => p.id === action.payload.id);
    },
    removeProperty(state, action: PayloadAction<Property>) {
      state.results.push(action.payload);
      remove(state.saved, p => p.id === action.payload.id);
    },
  },
});

export const { actions, reducer, name: sliceKey } = homepageSlice;
