import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner/Spinner';
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
    const { page, search } = this.state;
    const perPage = 12;
    if (prevState.page !== page || prevState.search !== search) {
      this.setState({ isLoading: true });
      fetchImages(search, page, perPage)
        .then(({ hits, totalHits }) => {
          const totalPages = totalHits / perPage;
          if (totalHits === 0) {
             this.setState({ isLoading: false });
            return toast.error('Sorry, no images found. Please, try again!');
          }
          if (page === 1) {
            toast.success(`Hooray! We found ${totalHits} images.`);
          }
          if (page > totalPages) {
            toast.info("You've reached the end of search results.");
          }
          this.setState(({ images }) => ({
            images: [...images, ...hits],
            total: totalHits,
            isLoading: false,
          }));
        })
        .catch(error => this.setState({ error }));
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
    const { images, total, largeImage, isLoading } = this.state;


    return (
      <Box
        listStyle="none"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SearchBar onSubmit={this.searchQuery} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} onClick={this.onOpenModal} />
            {total !== images.length && (
              <MoreButton type="button" onClick={this.onLoadMore}>
                Load More
              </MoreButton>
            )}
          </>
        )}
        {largeImage && (
          <Modal closeModal={this.onModalClose} url={largeImage} />
        )}
        {isLoading && <Spinner />}
        <ToastContainer />
      </Box>
    );
  }
}
