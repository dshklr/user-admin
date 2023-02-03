import React from "react";
import Modal from "react-modal";
import styles from "./confirm-modal.module.css";

export default function ConfirmModal({ isOpen, onClose, onConfirm }) {
  return (
    <div>
      <Modal
        className={styles.modalOverlay}
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
      >
        <div className={styles.content}>
          <h2 className={styles.header}>
            Are you sure you want to delete the card?
          </h2>
          <div className={styles.footer}>
            <button className={styles.button} onClick={onClose}>
              No
            </button>
            <button className={styles.button} onClick={onConfirm}>
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
