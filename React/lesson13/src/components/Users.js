"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Input = ({ data: users }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <Link href={`/user/${user.id}/edit`}>{user.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Input;
