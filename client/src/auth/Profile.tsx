import React, { useState } from "react";
import { Card, Button, Alert } from "@mui/material";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Card>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert severity="error">{error}</Alert>}
        <strong>Email:</strong> {currentUser?.email}
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  );
}
