import React from "react";

const UserShow = ({ user }) => {
  console.log("user", user);
  return (
    <div>
      <strong style={{ color: "red" }}>{user.title}</strong>
      <p>{user.body}</p>
    </div>
  );
};

export default UserShow;
