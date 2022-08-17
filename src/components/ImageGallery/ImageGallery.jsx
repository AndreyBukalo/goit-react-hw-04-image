import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';


export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
