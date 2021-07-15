import { actions, reducer } from '../slice';
import { HomePageState } from '../types';

describe('homepageSlice', () => {
  const mockProperty = {
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
  };

  it('should add a new property', () => {
    let previousState: HomePageState = {
      results: [mockProperty],
      saved: [],
    };

    //act
    let currentState = reducer(
      previousState,
      actions.addProperty(mockProperty),
    );

    //assert
    expect(currentState.saved).toContain(mockProperty);
    expect(currentState.results).toEqual([]);
  });

  it('should remove a new property', () => {
    let previousState: HomePageState = {
      results: [],
      saved: [mockProperty],
    };

    //act
    let currentState = reducer(
      previousState,
      actions.removeProperty(mockProperty),
    );

    //assert
    expect(currentState.results).toContain(mockProperty);
    expect(currentState.saved).toEqual([]);
  });
});
