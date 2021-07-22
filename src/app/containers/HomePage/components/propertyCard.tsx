import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { BrandingColor, Property } from 'types/Property';
import { Grid } from '@material-ui/core';

export interface Props {
  property: Property;
  children: JSX.Element;
}

const useStyles = makeStyles({
  root: { position: 'relative' },
  card: {
    position: 'relative',
  },
  cardDisabled: {
    position: 'relative',
    opacity: 0.5,
  },
  media: {
    height: 240,
  },
  banner: {
    backgroundColor: (props: BrandingColor) => props.primary,
  },
  children: {
    position: 'absolute',
    right: 15,
    bottom: 22,
  },
});

export const PropertyCard = (props: Props) => {
  const { property, children } = props;
  const classes = useStyles(property.agency.brandingColors);

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={classes.root}>
      <Card
        className={
          property?.disabled === true ? classes.cardDisabled : classes.card
        }
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
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
            <Grid item hidden={!hover}>
              <div className={classes.children}>{children}</div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
