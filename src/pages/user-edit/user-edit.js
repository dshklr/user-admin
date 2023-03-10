//libs
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//api
import { api } from "../../api";
//components
import { Loading, UserEditInfo } from "../../components/index";
import { getValidate } from "../../helpers";

export function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await api.get(`/users/${id}`);

        setUser({
          ...response.data,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const updatedErrors = { ...errors };
    if (e.target.name in updatedErrors) {
      delete updatedErrors[e.target.name];
    }
    
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors(updatedErrors);
  };

  const save = async () => {
    const { isValid, updatedErrors } = getValidate(user);

    if (!isValid) {
      setErrors(updatedErrors);
      return;
    }

    try {
      await api.put(`/users/${id}`, {
        ...user,
      });

      handleBack();
    } catch (error) {
      console.error(error);
    }
  };

  function handleBack() {
    navigate(-1);
  }

  return (
    <div>
      {isLoading && <Loading />}
      {!!user && (
        <UserEditInfo
          user={user}
          onChange={handleChange}
          onSave={save}
          errors={errors}
          handleBack={handleBack}
        />
      )}
    </div>
  );
}
