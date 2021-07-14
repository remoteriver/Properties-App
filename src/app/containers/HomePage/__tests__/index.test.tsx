import * as React from 'react';
import { Provider } from 'react-redux';
import { createRenderer } from 'react-test-renderer/shallow';
import { configureAppStore } from 'store/configureStore';
import { HomePage } from '../index';

const renderer = createRenderer();

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureAppStore();
  });

  it('should render and match the snapshot', () => {
    renderer.render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
