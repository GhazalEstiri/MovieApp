import { useState } from "react";
function Login() {
  const [name, setName] = useState("");
  const [pasword, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const regexPasword = /^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/;
  const regexName = /^[A-Za-z]+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const login = () => {};
  const handleInputs = (e) => {
    e.preventDefault();
    if (!name) {
      setError("empty name");
      return;
    }
    if (!regexName.test(name)) {
      setError("ridi name");
      return;
    }
    if (!pasword) {
      setError("empty pasword");
      return;
    }
    if (!regexPasword.test(pasword)) {
      setError("ridi pasword");
      return;
    }
    if (!email) {
      setError("empty email");
      return;
    }
    if (!regexEmail.test(email)) {
      setError("ridi email");
      return;
    }
    login();
  };
  return (
    <section className="bg-amber-200">
      <form onSubmit={handleInputs}>
        <input
          type="text"
          value={name}
          className="bg-red-800"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={pasword}
          className="bg-red-700"
          onChange={(e) => setPasword(e.target.value)}
        />
        <input
          type="text"
          value={email}
          className="bg-red-600"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
}
export default Login;
