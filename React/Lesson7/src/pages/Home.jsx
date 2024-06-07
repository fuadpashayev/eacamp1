import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import database, { onValue, ref } from "../firebase";
import { off, push, set } from "firebase/database";

const newUserRef = ref(database, "users");

const Home = () => {
  const [users, setUsers] = useState([]);
  const emailRef = useRef();
  const nameRef = useRef();

  useEffect(() => {
    onValue(newUserRef, (snap) => {
      // setUsers(snap.val())
      const usersObj = snap.val(); // {aaa: {name: 'Subhan'}}
      const usersObjKeys = Object.keys(usersObj); // ['aaa']
      // const newData = usersObjKeys.map((id) => ({ ...usersObj[id], id }));
      const newData = usersObjKeys.map((key) => {
        const istifadeci_melumatlari = usersObj[key];

        return {
          ...istifadeci_melumatlari,
          id: key,
        };
      });

      setUsers(newData);
    });

    return () => off(newUserRef);
  }, []);

  const addUser = () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;

    push(newUserRef, { email, name });
  };

  console.log(users);
  return (
    <div>
      <input type="text" placeholder="email" ref={emailRef} />
      <br />
      <input type="text" placeholder="name" ref={nameRef} />
      <br />
      <button onClick={addUser}>Add User</button>
      <br />
      <Link to="/profile">Go to profile page</Link>
      {users.map((user) => (
        <div
          key={user.email}
          // onClick={() => {
          //   set(
          //     ref(database, `users/${user.id}/email`),
          //     "salamlar@gmail.com" + Math.random()
          //   );
          // }}
        >
          {user.email}
        </div>
      ))}
    </div>
  );
};

export default Home;
