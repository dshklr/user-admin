//libs
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//components
import { Loading, UserProfileCard, ConfirmModal } from "../../components/index";
//api
import { api } from "../../api/index";

export function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const user = await api.get(`/users/${id}`);

        setUser({
          ...user.data,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  function handleBack() {
    navigate(-1);
  }

  const onDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/users/${id}`);
      handleBack();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <UserProfileCard onDelete={onDelete} user={user} />
      )}
      <ConfirmModal
        isOpen={showModal}
        onClose={handleClose}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
