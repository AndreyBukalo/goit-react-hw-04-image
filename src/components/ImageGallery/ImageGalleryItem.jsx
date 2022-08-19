import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({ largeImageURL, webformatURL,  tags, onCLick }) => {
  return (
    <ListItem>
      <Image src={webformatURL} alt={tags} />
    </ListItem>
  );
};

// FriendListItem.propTypes = {
//   friends: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//   }),
// };