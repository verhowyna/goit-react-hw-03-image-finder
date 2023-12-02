import { Component } from 'react';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { getImage } from 'components/axios';

import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalImages: 0,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });

        const finalQuery = query.split('/').pop();

        if (finalQuery === '') {
          return toast.error('Please enter something for search');
        }

        const initialParams = {
          q: finalQuery,
          page: page,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        };

        const fetch = await getImage(initialParams);

        if (fetch.total === 0) {
          return toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...fetch.hits],
            totalImages: fetch.totalHits,
          }));
          this.setState({ error: false });
        }
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again later.');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  addQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery.query}`,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading, totalImages } = this.state;
    return (
      <>
        <Searchbar addQuery={this.addQuery} />
        <div style={{ paddingTop: '10px' }}>
          {images.length > 0 && <ImageGallery images={images} />}
          {isLoading && <Loader />}
          {images.length >= 12 && totalImages > images.length && (
            <Button loadMore={this.handleLoadMore} />
          )}
          <Toaster position="right" />
        </div>
      </>
    );
  }
}
