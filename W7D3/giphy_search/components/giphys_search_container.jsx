import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapDispatchToProps = dispatch => ({
  fetchSearchGiphys: searchTerm => dispatch(fetchSearchGiphys(searchTerm))
});

const mapStateToProps = state => ({
  giphys: state.giphys
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiphysSearch);
