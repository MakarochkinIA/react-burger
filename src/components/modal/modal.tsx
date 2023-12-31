import { useEffect, FC } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalProps } from '../../utils/types';

const modalRoot = document.getElementById("react-modals");


const Modal: FC<ModalProps> = ({ children, header, onClose, extraClass }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay onClose={onClose} />
        <div className={styles.modal} data-testid="modal">
          <div className={styles.modal_head}>
            <span className={`${styles.modal_head_span} ${extraClass}`}>
              {header}
            </span>
            <div data-testid="close-icon">
            <CloseIcon onClick={onClose} type='primary' />
            </div>
          </div>
          {children}
        </div>
      </>
    ),
    modalRoot!
  );
}

export default Modal;