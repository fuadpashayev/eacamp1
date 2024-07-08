import UserShow from "@/components/UserShow";
import React from "react";

const UserEdit = async ({ params: { id: user_id } }) => {
  console.log("user_id", user_id);
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${user_id}`
  );
  const user = await userResponse.json();
  return (
    <div>
      <UserShow user={user} />
    </div>
  );
};

export default UserEdit;
