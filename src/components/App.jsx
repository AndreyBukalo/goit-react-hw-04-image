import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Box } from './Box';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from './api/ImageAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
  };

  componentDidUpdate() {
    this.fetchData();
  }

  fetchData = () => {
    const { search, page } = this.state;
    const perPage = 12;
    fetchImages(search, page, perPage).then(({ hits }) => {
      const data = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
        return {
          id,
          webformatURL,
          largeImageURL,
          tags,
        };
      });
      this.setState(({ images }) => ({
        images: [...data],
      }));
    });
  };

  searchQuery = searchInput => {
    this.setState({ search: searchInput });
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1
    }));
  };

  render() {
    return (
      <Box width={380} listStyle="none" ml="45px" mt="20px" p="0">
        <SearchBar onSubmit={this.searchQuery} />
        <ImageGallery images={this.state.images} />
        <button type="button" onClick={this.onLoadMore}></button>
        <ToastContainer />
      </Box>
    );
  }
}
