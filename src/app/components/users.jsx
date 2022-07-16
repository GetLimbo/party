import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user";
import SearchStatus from "./searchstatus";

const Users = ({ users, handleDelete, handleBookmark }) => {
  return (
    <>
      <h2>
        <SearchStatus length={users.length} />
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
            {users.map((user) => (
              <User
                key={user._id}
                {...user}
                onDelete={handleDelete}
                handleBookmark={handleBookmark}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;