import {connect} from 'react-redux';
import {selectCurrency} from '../actions';
import Currency from './currency';

const mapStateToProps = state => ({
  baseCurrency: state.baseCurrency,
  rates: state.rates
});

const mapDispatchToProps = dispatch => ({
  selectCurrency: (baseCurrency, rates) => {
    dispatch(selectCurrency(baseCurrency, rates));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currency);
