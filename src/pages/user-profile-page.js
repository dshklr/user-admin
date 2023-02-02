import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loader/loader";
import { api } from "../api/index";
import UserProfileCard from "../components/user-profile-card/user-profile-card";

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [company, setCompany] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <UserProfileCard company={company} user={user} />
      )}
    </div>
  );
}

export default UserPage;

// white page
// loaidng
// userInfo | not found user
