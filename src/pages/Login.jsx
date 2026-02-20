import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white shadow-lg p-8 rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-6">{user ? "Logout": "Login"}</h1>

        <button
          onClick={() => setUser(prev => !prev)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Login as Guest
        </button>
      </div>
    </div>
  );
}

export default Login;
