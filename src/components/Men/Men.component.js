import React from 'react';
import menProducts from './data';
import ProductCard from '../ProductCard';
import SelectedProductCard from '../SelectedProductCard';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Footer from '../Footer';
import { Draggable, Droppable } from 'react-drag-and-drop';

class MenProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: menProducts,
      selected: []
    };
    this.autoSort = this.autoSort.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.remItem = this.remItem.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  autoSort() {
    this.setState({
      data: menProducts.sort(function(a, b) {
        return a.qty - b.qty;
      })
    });
  }

  handleRightClick(e) {
    e.preventDefault();
    e.type == 'contextmenu' &&
      this.setState({
        selected: this.state.selected.concat({
          name: e.target.getAttribute('name'),
          img: e.target.getAttribute('img'),
          sku: e.target.getAttribute('sku')
        })
      });
  }

  remItem = (nameKey, myArray) => {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
        myArray.splice(i, 1);
        return myArray;
      }
    }
  };
  onDrop = data => {
    console.log('droped data: ', data);
    const resulted = this.remItem(data.clothes, this.state.selected);
    this.setState({ selected: this.state.selected.concat([resulted]) });
    console.log('selected data: ', this.state.selected);
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ padding: 25 }}>
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'space-between'
            }}
          >
            <Typography variant="headline">Men Clothing Products</Typography>
            <Button onClick={this.autoSort} color="primary" variant="raised">
              Auto Sort
            </Button>
          </div>
          <Grid container spacing={24} style={{ marginTop: 25 }}>
            <Grid item xs={12} md={6} lg={8}>
              <Droppable
                types={['clothes']} // <= allowed drop types
                onDrop={this.onDrop}
              >
                <Grid container spacing={16}>
                  {this.state.data.map(product => (
                    <Grid item xs={12} md={4} lg={3} key={product.sku}>
                      <ProductCard
                        name={product.name}
                        sku={product.sku}
                        price={product.price}
                        thumbnail={product.thumbnail}
                        quantity={product.qty}
                        added={product.added}
                        onClick={this.handleRightClick}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Droppable>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              Selected Items:
              <Grid container spacing={24}>
                {this.state.selected.map(selectedItem => (
                  <Grid item xs={12} md={6} lg={4}>
                    <Draggable type="clothes" data={selectedItem.name}>
                      <SelectedProductCard
                        image={selectedItem.img}
                        name={selectedItem.name}
                        sku={selectedItem.sku}
                      />
                    </Draggable>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default MenProducts;
