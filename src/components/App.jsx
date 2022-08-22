import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from './Box';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from './api/ImageAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { MoreButton } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
    largeImage: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const prevSearch = prevState.search;
    const nextSearch = this.state.search;
    const { page } = this.state;

    if (prevSearch !== nextSearch || (prevState.page !== page && page !== 1)) {
      this.fetchData();
    }
  }
  onOpenModal = url => {
    this.setState({
      largeImage: url,
    });
  };

  onModalClose = () => {
    this.setState({
      largeImage: '',
    });
  };

  fetchData = () => {
    const { search, page } = this.state;
    const perPage = 12;
    this.setState({ isLoading: true });
    fetchImages(search, page, perPage)
      .then(({ hits, totalHits }) => {
        const totalPages = Math.ceil(totalHits / perPage);

        if (hits.length === 0) {
          return toast.error('Sorry, no images found. Please, try again!');
        }

        if (page === 1) {
          toast.success(`Hooray! We found ${totalHits} images.`);
        }

        if (page === totalPages) {
          toast.info("You've reached the end of search results.");
        }

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
          total: totalHits,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  searchQuery = searchInput => {
    if (searchInput === this.state.search) {
      return;
    }
    this.setState({
      images: [],
      page: 1,
      search: searchInput,
      error: null,
    });
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      isLoading: true,
    }));
  };

  render() {
    const { images, total, largeImage } = this.state;
    const isLastPage = images.length === total;
    const loadBtn = images.length !== 0 && !isLastPage;

    return (
      <Box
        listStyle="none"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SearchBar onSubmit={this.searchQuery} />
        <ImageGallery images={images} onClick={this.onOpenModal} />
        {loadBtn && (
          <MoreButton type="button" onClick={this.onLoadMore}>
            Load More
          </MoreButton>
        )}
        {largeImage && (
          <Modal closeModal={this.onModalClose} url={largeImage} />
        )}
        <ToastContainer />
      </Box>
    );
  }
}
