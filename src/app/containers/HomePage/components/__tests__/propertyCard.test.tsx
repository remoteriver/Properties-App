import { Button } from '@material-ui/core';
import * as React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createRenderer } from 'react-test-renderer/shallow';
import { configureAppStore } from 'store/configureStore';
import { PropertyCard } from '../propertyCard';

const renderer = createRenderer();

describe('<HomePage />', () => {
  const mockProps = {
    property: {
      id: 1,
      price: '$726,500',
      agency: {
        brandingColors: {
          primary: '#ffe512',
        },
        logo:
          'https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif',
      },
      mainImage:
        'https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg',
    },
  };

  beforeAll(() => {});

  it('should render and match the snapshot', () => {
    //act
    renderer.render(
      <PropertyCard {...mockProps}>
        <Button>Add Property</Button>
      </PropertyCard>,
    );
    const renderedOutput = renderer.getRenderOutput();

    //assert
    expect(renderedOutput).toMatchSnapshot();
  });
});
