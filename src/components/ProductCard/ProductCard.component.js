import React from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const ProductCard = props => (
  <Card onContextMenu={e => props.onClick(e)}>
    <CardMedia
      name={props.name}
      img={props.thumbnail}
      sku={props.sku}
      image={props.thumbnail}
      title={props.name}
      style={{ height: 250, backgroundSize: 'contain' }}
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {props.name}
      </Typography>
      <h5>Price: AED {props.price}</h5>
      <h5>
        <b>Quantity:</b>
        {props.quantity}
      </h5>
      <h5>
        <b>SKU:</b>
        {props.sku}
      </h5>
    </CardContent>
    <CardActions
      style={{
        backgroundColor:
          props.quantity / props.added < 0.2
            ? 'rgba(87, 255, 18, 0.48)'
            : props.quantity / props.added >= 0.2 &&
              props.quantity / props.added < 0.7
              ? 'rgba(255, 171, 18, 0.48)'
              : props.quantity / props.added >= 0.7 &&
                props.quantity / props.added < 0.85
                ? 'rgba(255, 0, 0, 0.59)'
                : props.quantity / props.added >= 0.85 &&
                  props.quantity / props.added < 0.99
                  ? 'rgba(255, 0, 0, 0.77)'
                  : 'black'
      }}
    >
      <Button size="small" color="primary">
        Buy
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);
export default ProductCard;
