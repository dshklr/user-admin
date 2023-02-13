import React from "react";
import Modal from "react-modal";
import styles from "./confirm-modal.module.css";
import { Button } from "../button/button";

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
            Are you sure you want to delete user?
          </h2>
          <div className={styles.footer}>
            <Button label="Yes" onClick={onConfirm} />
            <Button label="No" onClick={onClose} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
