import React from "react";

const Users = ({ users }) => {
  return users.map((user, index) => {
    return (
      <div key={index}>
        <h2>{user.name}</h2>
        <p>{user.age}</p>
        <ul>
          {user.hobbies?.map((hobby, index) => {
            return <li key={index}>{hobby}</li>;
          })}
        </ul>
      </div>
    );
  });
};

export default Users;
