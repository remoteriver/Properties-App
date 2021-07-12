import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { PropertyCard } from 'app/containers/HomePage/components/propertyCard';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useEffectOnMount } from 'utils/useEffectOnMount';
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

  const handleAddProperty = () => {};

  const handleRemoveProperty = () => {};

  return (
    <>
      <Container>
        <Box p={1}>
          <Grid container direction="row">
            <Grid item xs={5}>
              <Box p={1} textAlign="center">
                <Typography variant="h6" component="span">
                  Results
                </Typography>
                <Grid container direction="column" spacing={2}>
                  {results.map(res => (
                    <Grid item>
                      <PropertyCard property={res}>
                        <Button
                          color="primary"
                          onClick={() => handleAddProperty()}
                        >
                          Add Property
                        </Button>
                      </PropertyCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item container xs={2} justifyContent="center">
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item xs={5}>
              <Box p={1} textAlign="center">
                <Typography variant="h6" component="span">
                  Saved
                </Typography>
                <Grid container direction="column" spacing={2}>
                  {saved.map(res => (
                    <Grid item>
                      <PropertyCard property={res}>
                        <Button
                          color="secondary"
                          onClick={() => handleRemoveProperty()}
                        >
                          Remove Property
                        </Button>
                      </PropertyCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
