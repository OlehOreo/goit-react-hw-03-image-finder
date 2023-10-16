import { ModalImg } from 'components/Modal/Modal';
import { Img } from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    document.body.style.overflow = 'auto';
  };

  render() {
    const { isModalOpen } = this.state;

    const { webformatURL, largeImageURL, tags } = this.props.apiImage;

    return (
      <div>
        <Img src={webformatURL} alt={tags} onClick={this.openModal} />
        <ModalImg
          isOpen={isModalOpen}
          isClose={this.closeModal}
          onRequestClose={this.closeModal}
          srs={largeImageURL}
          alt={tags}
        />
      </div>
    );
  }
}
