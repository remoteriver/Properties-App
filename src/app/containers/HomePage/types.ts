import { Color } from '@material-ui/core';
import { Property } from 'types/Property';

/* --- STATE --- */
export interface HomePageState {
  results: Property[];
  saved: Property[];
}

export type ContainerState = HomePageState;

export interface Data {
  results: Property[];
  saved: Property[];
}
