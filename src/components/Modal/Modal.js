import Modal from 'react-modal';
import { BsXLg } from 'react-icons/bs';

import { BtnCloseImg } from './Modal.styled';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    background: 'none',
  },
  overlay: {
    background: '#2e2f4266',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
};

export const ModalImg = ({ isOpen, isClose, onRequestClose, srs, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={srs} alt={alt} />
      <BtnCloseImg onClick={isClose}>
        <BsXLg size={30} />
      </BtnCloseImg>
    </Modal>
  );
};
