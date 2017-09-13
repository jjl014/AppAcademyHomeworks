import React from 'react';

const GiphyIndexItem = ({giphy}) => {
  return (
    <li><img src={giphy.images.fixed_height.url} /></li>
  );
};

export default GiphyIndexItem;
