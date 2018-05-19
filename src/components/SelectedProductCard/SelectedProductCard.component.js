import React from 'react';
import Card, { CardMedia } from 'material-ui/Card';

const SelectedProductCard = props => {
  if (!props.name) {
    return null;
  }
  return (
    <Card>
      <CardMedia image={props.image} style={{ height: 70 }} />
      <div style={{ margin: 10 }}>
        <h5>{props.name}</h5>
        <h5>{props.sku}</h5>
      </div>
    </Card>
  );
};
export default SelectedProductCard;
