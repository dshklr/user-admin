import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loader/loader";
import { api } from "../api/index";
import UserProfileCard from "../components/user-profile-card/user-profile-card";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/confirm-modal/confirm-modal";

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, companyResponse] = await Promise.all([
          api.get(`/users/${id}`),
          api.get(`/users/${id}/company/${id}`),
        ]);

        setUser(userResponse.data);
        setCompany(companyResponse.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const navigate = useNavigate();

  function handleConfirm() {
    navigate(-1);
  }

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/users/${id}`);
      handleConfirm();
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
        <UserProfileCard
          handleDelete={handleDelete}
          company={company}
          user={user}
        />
      )}

      <ConfirmModal
        isOpen={showModal}
        onClose={handleClose}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default UserPage;
