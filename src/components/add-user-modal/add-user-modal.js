//libs
import React, { useState } from "react";
import Modal from "react-modal";
//components
import { Input, Button } from "../index";
import { getValidate } from '../../helpers'

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

  const handleSaveClick = () => {
    const { isValid, updatedErrors } = getValidate(userState);

    if (!isValid) {
      setErrors(updatedErrors);
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
          error={errors["avatar"]}
        />
        <Input
          label="name"
          name="name"
          value={userState.name}
          onChange={handleInputChange}
          error={errors["name"]}
        />
        <Input
          label="date of birth"
          name="birthdate"
          value={userState.birthdate}
          onChange={handleInputChange}
          error={errors["birthdate"]}
        />

        <Input
          label="city"
          name="city"
          value={userState.city}
          onChange={handleInputChange}
          error={errors["city"]}
        />
        <Input
          label="email"
          name="email"
          value={userState.email}
          onChange={handleInputChange}
          error={errors["email"]}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={handleSaveClick} label=" add" />
          <Button onClick={onClose} label="cancel" />
        </div>
      </Modal>
    </div>
  );
}
