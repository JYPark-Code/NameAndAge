import React, { useState } from "react";

import UserForm from "./components/NewUser/UserForm";
import UserList from "./components/User/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      {users.length > 0 && <UserList info={users} />}
    </div>
  );
}

export default App;
