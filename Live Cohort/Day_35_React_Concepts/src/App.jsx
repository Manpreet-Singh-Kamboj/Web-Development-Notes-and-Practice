import { useState } from "react";

import "./App.css";

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

  const renderUser = users.map((user, index) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [
      ...prev,
      {
        name,
        age,
        hobbies: hobbies.split(","),
      },
    ]);
    setName("");
    setAge("");
    setHobbies("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "hobbies") {
      setHobbies(value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          name="age"
          value={age}
          type="number"
          placeholder="Age"
          onChange={handleChange}
        />
        <textarea
          name="hobbies"
          value={hobbies}
          onChange={handleChange}
          placeholder="Write your hobbies like coding, reading"
        />
        <button type="submit">Submit</button>
      </form>
      <h1>Users</h1>
      {renderUser}
    </div>
  );
}

export default App;
