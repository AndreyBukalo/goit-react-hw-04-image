import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  onClick,
}) => {
  return (
    <ListItem>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
      />
    </ListItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
