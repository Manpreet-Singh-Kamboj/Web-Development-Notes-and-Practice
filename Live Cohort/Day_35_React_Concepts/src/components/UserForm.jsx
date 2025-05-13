import React from "react";

const UserForm = ({
  setUsers,
  setName,
  setAge,
  setHobbies,
  name,
  age,
  hobbies,
}) => {
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
    <div className="left">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit} className="form">
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
          rows={10}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
