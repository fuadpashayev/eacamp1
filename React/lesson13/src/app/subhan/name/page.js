import Users from "@/components/Users";
import React from "react";

const page = async () => {
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const users = await usersResponse.json();
  return (
    <div>
      <Users data={users} />
    </div>
  );
};

export default page;
