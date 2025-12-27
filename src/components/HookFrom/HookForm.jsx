import { useState } from "react";
import useInputFields from "../../hooks/useInputFields";

const HookForm = () => {
  const [email, handleOnChangeEmail] = useInputFields("");
  const [password, handleOnChangePassword] = useInputFields("");
  const [error, setError] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password must be needed 6 character");
    } else {
      setError("");
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        onChange={handleOnChangeEmail}
        type="email"
        name="email"
        placeholder="Email"
      />
      <br />
      <input
        onChange={handleOnChangePassword}
        type="password"
        name="password"
        placeholder="Password"
      />
      <br />
      <input type="submit" value="Submit" />
      <br />
      <span style={{ color: "red" }}>{error}</span>
    </form>
  );
};

export default HookForm;
