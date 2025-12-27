import { useState } from "react";

const ControlForm = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must be 6 character");
    } else {
      setError("");
    }
  };

  const handleOnchangeForm = (e) => {
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must ba 6 character");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          onChange={handleOnchangeForm}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <span style={{ color: "red" }}>{error}</span>
      </form>
    </div>
  );
};

export default ControlForm;
