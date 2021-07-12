import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './slice';
import { Data } from './types';

export function* getData() {
  try {
    const data: Data = yield call(request, '/data/data.json');

    console.debug('Fetch data...', data);

    yield put(actions.getDataSuccess(data));
  } catch (error) {
    console.error(error.message);
  }
}

export function* saga() {
  yield takeLatest(actions.getData, getData);
}
