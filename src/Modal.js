import React from 'react';
import s from './Modal.module.css';

const Modal = ({ closeModal, deleteAll }) => {
  return (
    <div className={s.overwiew}>
      <div className={s.modal}>
        <p className={s.question}>Are you sure?</p>
        <button onClick={closeModal} type="button" className={s.b_closeModal}>
          Cancel
        </button>
        <button onClick={deleteAll} type="button" className={s.b_deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Modal;
