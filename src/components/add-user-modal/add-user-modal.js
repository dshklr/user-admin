import React, { useState } from "react";
import Modal from "react-modal";
import { Input } from "../input/input";
import styles from "../add-user-modal/add-user-modal.module.css";

const DEFAULT_USER = {
  avatar: "",
  name: "",
  birthdate: "",
  city: "",
  email: "",
};

export function AddUserModal({ isOpen, onClose, onSave }) {
  const [userState, setUserState] = useState(() => DEFAULT_USER);
  const [errors, setErrors] = useState({});

  const getValidate = (object) => {
    let isValid = true;
    const updatedErrors = { ...errors };

    Object.entries(object).forEach(([key, value]) => {
      if (value === "") {
        isValid = false;
        updatedErrors[key] = "This information is important to us!";
      }
    });

    setErrors(updatedErrors);

    return isValid;
  };

  const handleSaveClick = () => {
    const isValid = getValidate(userState);

    if (!isValid) {
      return;
    }
    onSave(userState);
  };

  const handleInputChange = (e) => {
    const updatedErrors = { ...errors };

    if (e.target.name in updatedErrors) {
      delete updatedErrors[e.target.name];
    }

    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
    setErrors(updatedErrors);
  };

  return (
    <div className={styles.modalOverlay}>
      <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal}>
        <Input
          label="image source"
          name="avatar"
          value={userState.avatar}
          onChange={handleInputChange}
          className={errors["avatar"] ? styles.hasError : styles.input}
          error={errors["avatar"]}
        />
        <Input
          label="name"
          name="name"
          value={userState.name}
          onChange={handleInputChange}
          className={errors["name"] ? styles.hasError : styles.input}
          error={errors["name"]}
        />
        <Input
          label="date of birth"
          name="birthdate"
          value={userState.birthdate}
          onChange={handleInputChange}
          className={errors["birthdate"] ? styles.hasError : styles.input}
          error={errors["birthdate"]}
        />

        <Input
          label="city"
          name="city"
          value={userState.city}
          onChange={handleInputChange}
          className={errors["city"] ? styles.hasError : styles.input}
          error={errors["city"]}
        />
        <Input
          label=" email"
          name="email"
          value={userState.email}
          onChange={handleInputChange}
          className={errors["email"] ? styles.hasError : styles.input}
          error={errors["email"]}
        />
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleSaveClick}>
            add
          </button>
          <button className={styles.button} onClick={onClose}>
            cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
