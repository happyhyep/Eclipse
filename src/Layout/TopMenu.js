import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "98.css";
import { useAuth } from "../Context/auth/auth";

const TopMenu = () => {
  const auth = useAuth();
  const { user } = auth;
  return (
    <div className="window" style={{ width: "100%" }}>
      <div className="title-bar" style={{ height: "30px" }}>
        <div style={{ display: " flex" }}>
          <Link to={"/"}>
            <div className="title-bar-text" style={{ fontSize: "20px" }}>
              {"  "}Eclipse
            </div>
          </Link>
        </div>
        <div className="title-bar-controls">
          <div className="title-bar-text" style={{ fontSize: "20px" }}>
            {`잔고 : ${user.money}`}
          </div>
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
