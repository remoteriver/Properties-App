import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, Data } from './types';
import remove from 'lodash/remove';
import { Property } from 'types/Property';

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
    addProperty(state, action: PayloadAction<Property>) {
      state.saved.push(action.payload);
      remove(state.results, p => p.id === action.payload.id);
    },
    removeProperty(state, action: PayloadAction<Property>) {
      state.results.push(action.payload);
      remove(state.saved, p => p.id === action.payload.id);
    },
    disableProperty(state, action: PayloadAction<Property>) {
      remove(state.results, p => p.id === action.payload.id);
      state.results = state.results.concat([action.payload]);
    },
    enableProperty(state, action: PayloadAction<Property>) {
      remove(state.results, p => p.id === action.payload.id);
      state.results = state.results.concat([action.payload]);
    },
  },
});

export const { actions, reducer, name: sliceKey } = authSlice;
