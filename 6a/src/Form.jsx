import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>{name}</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter Name:
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
          />
          <br></br>
        </label>
      </form>
    </>
  );
};

export default Form;
