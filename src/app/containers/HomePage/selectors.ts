import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';

const selectLogin = (state: RootState) => state.homepageState;

export const selectResults = createSelector(
  [selectLogin],
  state => state?.results,
);

export const selectSaved = createSelector([selectLogin], state => state?.saved);
