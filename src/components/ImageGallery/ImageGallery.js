import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgList } from './ImageGallery.styled';

export const ImageGallery = ({ apiImage }) => {
  return (
    <ImgList>
      {apiImage.map(item => (
        <li key={item.id}>
          <ImageGalleryItem apiImage={item} />
        </li>
      ))}
    </ImgList>
  );
};
