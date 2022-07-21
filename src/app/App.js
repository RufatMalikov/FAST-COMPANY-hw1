import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    //console.log(userId);
    return setUsers((prevState) =>
      prevState.filter((element) => element._id !== userId)
    );
  };
  const handleToogleBookMark = (id) => {
    //console.log(id);
    let bookmarkValue = users.find((item) => item._id === id);
    bookmarkValue.bookmark = true;
    //console.log(users);
    const newUsers = [...users];
    //console.log(bookmarkValue.bookmark);
    //console.log(newUsers);
    setUsers(newUsers);
  };
  return (
    <>
      <h2>
        <span
          className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
        >
          {users.length > 0
            ? `${
                users.length + " " + SearchStatus(users.length)
              } с тобой сегодня`
            : "Никто с тобой не тусанет"}
        </span>
      </h2>

      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <Users
              users={users}
              handleDelete={handleDelete}
              handleToogleBookMark={handleToogleBookMark}
            />
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
