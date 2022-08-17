import React from 'react';
import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ id, webformatURL,  tags }) => {
  return (
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

// FriendListItem.propTypes = {
//   friends: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//   }),
// };
