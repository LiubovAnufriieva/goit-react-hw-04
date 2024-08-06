import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      // border: 'none',
      // outline: 'none',
      // maxHeight: '90vh',
      // overflowY: 'auto',
    },
  };

const ImageModal = ({ isOpen, onRequestClose, imageUrl, altDescription, description, likes, user }) => {
  return (
       <Modal
       isOpen={isOpen}
       onRequestClose={onRequestClose}
       style={customStyles}
       contentLabel="Image Modal"
       >
        <div className={css.container}>
          <img className={css.image} src={imageUrl} alt={altDescription}/>
          <h3 className={css.author}>Author: {user.name}</h3>
          <p className={css.description}>{description}</p>
          <p className={css.likes}>{likes}</p>
        </div>
       </Modal>
  );
} ;

export default ImageModal;