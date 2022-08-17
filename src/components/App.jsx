import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Box } from './Box';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from './api/ImageAPI';

export class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
  };

  componentDidMount() {
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
        images: [...images, ...data],
      }));
    });
  };

  searchQuery = searchInput => {
    this.setState({ search: searchInput });
  };

  render() {
    return (
      <Box width={380} listStyle="none" ml="45px" mt="20px" p="0">
        <SearchBar onSubmit={this.searchQuery} />
        <ToastContainer />
      </Box>
    );
  }
}
