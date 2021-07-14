import * as React from 'react';
import { Provider } from 'react-redux';
import { createRenderer } from 'react-test-renderer/shallow';
import { configureAppStore } from 'store/configureStore';
import { Header } from '../index';

const renderer = createRenderer();

describe('<Header />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Header />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
