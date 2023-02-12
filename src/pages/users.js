import React, { useState, useEffect } from "react";
import UserList from "../components/user-list/user-list";
import Search from "../components/search/search";
import Select from "../components/select/select";
import { SELECT_OPTIONS, SORT_OPTIONS } from "../components/constants";
import { api } from "../api/index";
import Loading from "../components/loader/loader";
import "../app.css";
import { AddUserModal } from "../components/add-user-modal/add-user-modal";

export function Users() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState(SORT_OPTIONS[0].value);
  const [order, setOrder] = useState(SELECT_OPTIONS[0].value);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOrderChange = (order) => {
    setOrder(order);
  };

  const handleSortChange = (sort) => {
    setSort(sort);
  };

  useEffect(() => {
    const fetchUsers = async (params) => {
      setIsLoading(true);

      try {
        const response = await api.get("/users", {
          params,
        });

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers({
      ...(searchValue ? { name: searchValue } : {}),
      sortBy: sort,
      order: order,
    });
  }, [order, sort, searchValue]);

  function handleAddUser() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  const handleUserAdd = async (user) => {
    try {
      handleClose();
      setIsLoading(true);

      const response = await api.post("/users", user);
      if (!!response) {
        const responseUser = await api.get(`/users`, {
          params: {
            ...(searchValue ? { name: searchValue } : {}),
            sortBy: sort,
            order: order,
          },
        });
        setUsers(responseUser.data);
        console.log(responseUser);
      }
    } catch (error) {
      console.error("Error adding user", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="searchControl">
        <Search
          value={searchValue}
          setSearchValue={setSearchValue}
          placeholder="search by name"
        />
        <Select onChange={handleOrderChange} options={SELECT_OPTIONS} />
        <Select onChange={handleSortChange} options={SORT_OPTIONS} />
        <button className="button" onClick={handleAddUser}>
          add new user
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : users.length === 0 ? (
        <p>Nothing found</p>
      ) : (
        <UserList users={users} />
      )}
      {showModal && (
        <AddUserModal
          isOpen={true}
          onClose={handleClose}
          onSave={handleUserAdd}
        />
      )}
    </div>
  );
}
