import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { SearchBar } from './SearchBar/SearchBar';
import { fetchImageGallery } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Error } from './Layout';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    loading: false,
    imageGallery: [],
    error: false,
  };

  handlerSearchImg = newImg => {
    this.setState({
      query: newImg,
      page: 1,
      imageGallery: [],
      toast: false,
    });
  };

  handlerLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  queryImgGallery = async (query, page, prevState) => {
    try {
      this.setState({ loading: true, error: false });

      const queryImg = await fetchImageGallery(query, page);

      if (queryImg.length === 0) {
        toast.error('No images found, please change your search query', {
          style: { width: '1000px', height: '80px' },
        });
      }
      if (!this.state.toast) {
        toast.success('We found images');
        this.setState({ toast: true });
      }

      const newImages = queryImg.filter(
        newImage => newImage.id !== prevState.imageGallery.id
      );

      this.setState(prevState => ({
        imageGallery: [...prevState.imageGallery, ...newImages],
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const { query, page } = this.state;
      this.queryImgGallery(query, page, prevState);
    }
  }

  render() {
    const { imageGallery, loading, error } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handlerSearchImg} />

        {loading && <Loader />}

        {error && <Error>Whoops! Error! Please reload this page!</Error>}

        {imageGallery.length > 0 && (
          <ImageGallery apiImage={this.state.imageGallery} />
        )}

        {imageGallery.length > 0 && (
          <BtnLoadMore onClick={this.handlerLoadMore} />
        )}

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              height: '80px',
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '20px',
            },
          }}
        />
      </div>
    );
  }
}
