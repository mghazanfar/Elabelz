import { connect } from 'react-redux';
import { updateStock } from './actions';

const mapStateToProps = ({ stock }) => ({
  stock
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateStock: selected => dispatch(updateStock(selected))
});

export const withStock = Component =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
