import React from "react";
import menProducts from "./data";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Pants from "./img/pants1.jpg";
class MenProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: menProducts,
      selected: []
    };
    this.autoSort = this.autoSort.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
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
    e.type == "contextmenu" &&
      this.setState({
        selected: this.state.selected.concat({
          name: e.target.getAttribute("name"),
          img: e.target.getAttribute("img"),
          sku: e.target.getAttribute("sku")
        })
      });
  }
  render() {
    var temp = 0;
    const total = this.state.data.map(item => temp + item.qty);
    temp = total.reduce(function(acc, val) {
      return acc + val;
    });
    console.log("Total", temp);
    return (
      <React.Fragment>
        <div
          style={{ display: "flex", flex: 1, justifyContent: "space-between" }}
        >
          <Typography variant="headline">Men Clothing Products</Typography>
          <Button onClick={this.autoSort} color="primary" variant="raised">
            Auto Sort
          </Button>
        </div>
        <Grid container spacing={24} style={{ marginTop: 25 }}>
          <Grid item xs={12} md={6} lg={8}>
            <Grid container spacing={16}>
              {this.state.data.map(product => (
                <Grid item xs={12} md={4} lg={3} key={product.sku}>
                  <Card onContextMenu={e => this.handleRightClick(e)}>
                    <CardMedia
                      name={product.name}
                      img={product.thumbnail}
                      sku={product.sku}
                      image={product.thumbnail}
                      title={product.name}
                      style={{ height: 250, backgroundSize: "contain" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        {product.name}
                      </Typography>
                      <h5>Price: AED {product.price}</h5>
                      <h5>
                        <b>Quantity:</b>
                        {product.qty}
                      </h5>
                      <h5>
                        <b>SKU:</b>
                        {product.sku}
                      </h5>
                    </CardContent>
                    <CardActions
                      style={{
                        backgroundColor:
                          product.qty / temp < 0.2
                            ? "rgba(87, 255, 18, 0.48)"
                            : product.qty / temp >= 0.2 &&
                              product.qty / temp < 0.7
                              ? "rgba(255, 171, 18, 0.48)"
                              : product.qty / temp >= 0.7 &&
                                product.qty / temp < 0.85
                                ? "rgba(255, 0, 0, 0.59)"
                                : product.qty / temp >= 0.85 &&
                                  product.qty / temp < 0.99
                                  ? "rgba(255, 0, 0, 0.77)"
                                  : "black"
                      }}
                    >
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            Selected Items:
            <Grid container spacing={24}>
              {this.state.selected.map(selectedItem => (
                <Grid item xs={12} md={6} lg={4}>
                  <Card>
                    <CardMedia
                      image={selectedItem.img}
                      style={{ height: 70 }}
                    />
                    <div style={{ margin: 10 }}>
                      <h5>{selectedItem.name}</h5>
                      <h5>{selectedItem.sku}</h5>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default MenProducts;
