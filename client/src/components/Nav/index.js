import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './styles.css';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="in-nav">

          <Link to="/orderHistory">
            <button>Order History</button>
          </Link>

          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
            <button>Logout</button>
          </a>

        </div>
      );
    } else {
      return (
        <div className="in-nav">

          <Link to="/signup">
            <button>Signup</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
          
        </div>
      );
    }
  }

  return (
    <nav>
      {showNavigation()}
    </nav>

  );
}

export default Nav;
