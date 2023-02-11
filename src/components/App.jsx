import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import SearchPixabay from '../PixabayAPI/PixabayAPI';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


export class App extends Component {
    state = {
      querry: '',
      images: [],
      loading: false,
      page: 1,
      total: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { querry, page } = this.state;
    if (
      prevState.querry !== querry ||
      prevState.page !== page
    ) {
      try {
        this.setState({ loading: true });
        const data = await SearchPixabay(querry, page);

        if (data.hits.length < 1) {
          toast.warning(
            `${this.state.querry} is not defined! Please, enter other value and try again!`
          );
        }

        const images = data.hits.map(({ id, largeImageURL, tags, webformatURL }) => {
          return { id, largeImageURL, tags, webformatURL };
        });

        this.setState({
          images: [...this.state.images, ...images],
          total: data.totalHits
        });
      } catch (error) {
        toast.error('Something went wrong. Please, try again!');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = querry => {
    this.setState({ querry, page: 1 });
    if (querry !== this.state.querry || this.state.page > 1) {
      this.setState({ images: [] });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };



  render() {
    const { images, total,loading } = this.state;

    return <div className='container'>
      <Searchbar onSubmit={this.handleSubmit} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {total > 12 && !loading && <Button onLoadMore={this.loadMore} />}

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
    </div>
  }
}