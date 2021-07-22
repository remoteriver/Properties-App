import { runSaga } from 'redux-saga';
import * as Request from 'utils/request';
import { getData, saga } from '../saga';
import { actions, reducer } from '../slice';
import { Data } from '../types';

describe('homepageSaga', () => {
  const mockData: Data = {
    results: [],
    saved: [],
  };

  it('should dispatch getDataSuccess when API call finishes', async () => {
    //arrange
    const requestSpy = jest
      .spyOn(Request, 'request')
      .mockImplementation(() => Promise.resolve(mockData));
    let dispatched: any[] = [];

    //act
    const result = await runSaga<Data, any, any>(
      {
        dispatch: action => dispatched.push(action),
      },
      getData,
    ).result();

    //assert
    expect(requestSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.getDataSuccess(mockData)]);

    //teardown
    requestSpy.mockClear();
  });
});
