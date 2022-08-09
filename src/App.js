import React, { useState } from "react";
import Form from "./components/Users/Form";
import "./App.css";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const createUserHadler = (name, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <Form onCreateUser={createUserHadler} />
      <UserList users={userList} />
    </React.Fragment>
  );
};

export default App;
