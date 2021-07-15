import * as React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createRenderer } from 'react-test-renderer/shallow';
import { configureAppStore } from 'store/configureStore';
import { HomePage } from '../index';
import { actions } from '../slice';
import * as redux from 'react-redux';
import { act, create } from 'react-test-renderer';
import { ContainerState } from '../types';

const renderer = createRenderer();

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureAppStore();
  });

  it('should render and match the snapshot', () => {
    //act
    renderer.render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const renderedOutput = renderer.getRenderOutput();

    //assert
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should dispatch getData action on mount', async () => {
    //arrange
    const mockDispatchFn = jest.fn();
    const useDispatchSpy = jest
      .spyOn(redux, 'useDispatch')
      .mockReturnValue(mockDispatchFn);

    //act
    act(() => {
      create(
        <Provider store={store}>
          <HomePage />
        </Provider>,
      );
    });

    //assert
    expect(mockDispatchFn).toBeCalledWith(actions.getData());

    //teardown
    useDispatchSpy.mockClear();
  });
});
