import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>CRM Dashboard</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/customers">Customers</Link>
      </div>
    </nav>
  );
}
