import { FC } from 'react';
import styles from './modal-overlay.module.css';
import { ModalOverlayProps } from '../../../utils/types';


const ModalOverlay: FC<ModalOverlayProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}></div>
  );
}

export default ModalOverlay;