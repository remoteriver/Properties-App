import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useEffectOnMount } from 'utils/useEffectOnMount';
import { PropertyList } from './components/propertyList';
import { saga } from './saga';
import { selectResults, selectSaved } from './selectors';
import { actions, reducer, sliceKey } from './slice';

export const HomePage = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: saga });

  const dispatch = useDispatch();
  const results = useSelector(selectResults);
  const saved = useSelector(selectSaved);

  useEffectOnMount(() => {
    //debugger;
    dispatch(actions.getData());
  });

  return (
    <>
      <div>HomePage</div>
      <PropertyList results={results} saved={saved}></PropertyList>
    </>
  );
};
