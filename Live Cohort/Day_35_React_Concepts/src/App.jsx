import { useState } from "react";

import "./App.css";
import Users from "./components/Users";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([
    {
      name: "John",
      age: 20,
      hobbies: ["coding", "gaming", "driving"],
    },
    {
      name: "Jane",
      age: 21,
      hobbies: ["coding", "music"],
    },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState("");

  return (
    <div className="container">
      <UserForm
        name={name}
        age={age}
        hobbies={hobbies}
        setName={setName}
        setAge={setAge}
        setHobbies={setHobbies}
        setUsers={setUsers}
      />
      <div className="right">
        <h1>Users</h1>
        <Users users={users} />
      </div>
    </div>
  );
}

export default App;
