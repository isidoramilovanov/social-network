import React from "react";
import { Link } from "react-router-dom";

import "./user-list.styles.css";

const UserList = ({ user }) => {
  const { firstName, surname, gender } = user;

  let img;
  if (gender === "female") {
    img = (
      <img
        src={require("../../img/female-icon.png")}
        alt="icon"
        className="user-list-img"
      />
    );
  } else {
    img = (
      <img
        src={require("../../img/male-icon.png")}
        alt="icon"
        className="user-list-img"
      />
    );
  }

  return (
    <div className="user-list">
      <Link
        style={{ textDecoration: "none" }}
        to={{ pathname: "/user", state: { user } }}
      >
        {img}
        <h2 className="user-name">{`${firstName} ${surname}`}</h2>
      </Link>
    </div>
  );
};

export default UserList;
