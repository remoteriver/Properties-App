import React, { Component, ComponentType } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrandingColor, Property } from 'types/Property';
import { Avatar, Grid } from '@material-ui/core';

export interface Props {
  property: Property;
  children: JSX.Element;
}

const useStyles = makeStyles({
  root: {},
  media: {
    height: 240,
  },
  banner: {
    backgroundColor: (props: BrandingColor) => props.primary,
  },
});

export const PropertyCard = (props: Props) => {
  const { property, children } = props;
  const classes = useStyles(property.agency.brandingColors);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.banner}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <img src={property.agency.logo} alt="agency logo" />
          </Grid>
        </Grid>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={property.mainImage}
        title="main image"
      />
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="h5" component="span">
              {property.price}
            </Typography>
          </Grid>
          <Grid item>{children}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
