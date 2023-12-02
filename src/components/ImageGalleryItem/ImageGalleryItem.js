import { Component } from 'react';

import { ImgModal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;

    return (
      <li>
        <img
          src={webformatURL}
          className={css.imageListItem}
          alt={tags}
          loading="lazy"
          onClick={this.openModal}
        />
        <ImgModal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          imageURL={largeImageURL}
          imageDescription={tags}
        />
      </li>
    );
  }
}
