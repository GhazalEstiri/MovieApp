import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";

import loginimage from "../assets/login.jpg";

function Login() {
  const [name, setName] = useState("");
  const [pasword, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const regexPasword = /^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/;
  const regexName = /^[A-Za-z]+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const { login, user, logout } = useContext(AuthContext);

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

    login(name, email);
    setError("");
  };

  return (
    <section className="h-screen w-full overflow-hidden text-white flex">
      {/* LEFT - IMAGE */}
      <div className="w-1/2 h-full">
        <img
          src={loginimage}
          className="w-full h-full object-cover object-center"
          alt="Login"
        />
      </div>

      {/* RIGHT - FORM */}
      <div className="w-1/2 h-full flex items-center justify-center bg-black">
        {user ? (
          <div className="flex flex-col items-center gap-4">
            <p>Hello {user.name}</p>

            <button
              onClick={logout}
              className="px-5 py-2 bg-red-600 rounded-lg"
            >
              Log out
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleInputs}
            className="w-3/4 max-w-md flex flex-col gap-4"
          >
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="bg-red-800 p-3 rounded"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="password"
              value={pasword}
              placeholder="Password"
              className="bg-red-700 p-3 rounded"
              onChange={(e) => setPasword(e.target.value)}
            />

            <input
              type="email"
              value={email}
              placeholder="Email"
              className="bg-red-600 p-3 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="bg-white text-black p-3 rounded font-semibold"
            >
              Login
            </button>

            {error && <p className="text-red-400">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}

export default Login;
