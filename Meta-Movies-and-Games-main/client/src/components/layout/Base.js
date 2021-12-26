import React from "react";
import { Link } from "react-router-dom";

const Base = () => {
  return (
    <div>
      <section>
        <div>
          <h1>Welcome to MMG!</h1>
        </div>
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Base;
