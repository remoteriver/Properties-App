import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { Property } from 'types/Property';

export interface Props {
  results: Property[];
  saved: Property[];
}

export const PropertyList = (props: Props) => {
  const { results, saved } = props;
  return (
    <>
      <List component="nav" aria-label="property-list">
        {results.map(res => (
          <ListItem>
            <ListItemText primary={res.id} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
