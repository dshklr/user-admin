import React, { useState, useEffect } from "react";
import UserList from "../components/user-list/user-list";
import Search from "../components/search/search";
import Select from "../components/select/select";
import { SELECT_OPTIONS, SORT_OPTIONS } from "../components/constants";
import { api } from "../api/index";
import Loading from "../components/loader/loader";
import "../app.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState(SORT_OPTIONS[0].value);
  const [order, setOrder] = useState(SELECT_OPTIONS[0].value);
  const [isLoading, setIsLoading] = useState(false);

  const handleOrderChange = (order) => {
    setOrder(order);
  };

  const handleSortChange = (sort) => {
    setSort(sort);
  };

  // function handleUserDelete(userId) {
  //   setIsLoading(true);

  //   try {
  //     api.delete(`/user/${userId}`).then((response) => {
  //       setUsers((users) => users.filter((user) => user.id !== userId));

  //       setIsLoading(false);
  //     });
  //   } catch (error) {
  //     setIsLoading(false);

  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    const fetchUsers = async (params) => {
      setIsLoading(true);

      try {
        const response = await api.get("/user", {
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
      </div>
      {isLoading ? (
        <Loading />
      ) : users.length === 0 ? (
        <p>Nothing found</p>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
}
