import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'


const modalRoot = document.getElementById("react-modals");

const Modal = ({ children, header, onClose }) => {

    React.useEffect(() => {
        const handleEscapeKey = (event) => {
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
                <div className={styles.modal}>
                    <div className={styles.modal_head}>
                        <span className={`${styles.modal_head_span} text text_type_main-large`}>
                            {header}
                        </span>
                        <CloseIcon onClick={onClose} type='primary' />
                    </div>
                    {children}
                </div>
            </>
        ),
        modalRoot
    );
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    header: PropTypes.string,
    onClose: PropTypes.func.isRequired
}

export default Modal;