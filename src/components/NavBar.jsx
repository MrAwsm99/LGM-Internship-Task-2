import React from "react";
import "../styles/NavBar.css";

function NavBar({ getUsers }) {
  return (
    <div className="navbar">
      <div className="brand__name">
        <h2>GAMEHUB Users</h2>
      </div>
      <div className="get__users">
        <button className="button" onClick={getUsers}>
          Get Users
        </button>
      </div>
    </div>
  );
}

export default NavBar;
