import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/userSlice";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const Header = () => {
  const { isAuthenticated, isLoading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <nav className="custom-container">
      <div className="nav-wrapper">
        <Link
          to={isAuthenticated ? "/surveys" : "/"}
          className="left brand-logo"
        >
          Emaily
        </Link>

        <ul className="right">
          {isLoading ? (
            <div>Loading...</div>
          ) : isAuthenticated ? (
            <>
              <li style={{ margin: '0 12px' }}>Credits: {user && user.credits}</li>
              <li><Payments /></li>
              <li><a href="/api/logout">Logout</a></li>
            </>
          ) : (
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
