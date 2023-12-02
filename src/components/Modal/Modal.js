import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(8px)',
    zIndex: '1000',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '8px',
    background: 'transparent',
    overflow: 'hidden',
    padding: '0',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
  },
};

Modal.setAppElement('#root');

export const ImgModal = ({ imageURL, imageDescription, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onClose}
      contentLabel="Big Image"
    >
      <img src={imageURL} alt={imageDescription} />
    </Modal>
  );
};
