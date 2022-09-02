import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner/Spinner';
import { Box } from './Box';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from './api/ImageAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { MoreButton } from './Button/Button';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [largeImage, setLargeImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('Error');
  const [total, setTotal] = useState('');

  useEffect(() => {
    const perPage = 12;
    if (search) {
      setIsLoading(true);
      fetchImages(search, page, perPage)
        .then(({ hits, totalHits }) => {
          const totalPages = Math.ceil(totalHits) / perPage;
          if (totalHits === 0) {
            setIsLoading(false);
            return toast.error('Sorry, no images found. Please, try again!');
          }
          if (page === 1) {
            toast.success(`Hooray! We found ${totalHits} images.`);
          }
          if (page > totalPages) {
            toast.info("You've reached the end of search results.");
          }
          setImages(prevState => [...prevState, ...hits]);
          setTotal(totalHits);
          setIsLoading(false);
        })
        .catch(setError(error));
    }
  }, [error, page, search]);

  const onOpenModal = url => {
    setLargeImage(url);
  };

  const onModalClose = () => {
    setLargeImage('');
  };

  const searchQuery = searchInput => {
    if (searchInput === search) {
      return;
    }
    setImages([]);
    setSearch(searchInput);
  };

  const onLoadMore = () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  return (
    <Box
      listStyle="none"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <SearchBar onSubmit={searchQuery} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onClick={onOpenModal} />
          {total !== images.length && (
            <MoreButton type="button" onClick={onLoadMore}>
              Load More
            </MoreButton>
          )}
        </>
      )}
      {largeImage && <Modal closeModal={onModalClose} url={largeImage} />}
      {isLoading && <Spinner />}
      <ToastContainer />
    </Box>
  );
};
