import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "golden retriever"};
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys("Golden+Retriever");
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.search.split(" ").join("+");
    this.props.fetchSearchGiphys(searchTerm);
  }

  updateSearch(e) {
    e.preventDefault();
    this.setState({search: e.target.value});
  }

  render() {
    const { giphys } = this.props;
    console.log(giphys);
    return (
      <div>
        <form>
          <input type="text" onChange={this.updateSearch} value={this.state.search}></input>
          <button type="submit" onClick={this.handleSubmit}>Search Giphy</button>
        </form>
        <GiphysIndex giphys={giphys}/>
      </div>
    );
  }
}

export default GiphysSearch;
