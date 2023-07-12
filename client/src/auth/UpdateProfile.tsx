import React, { useRef, useState } from "react";
import { Button, Card, Alert } from "@mui/material";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match");
    }

    const promises: Promise<void>[] = [];
    setLoading(true);
    setError("");

    if (emailRef.current?.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current?.value ?? ""));
    }
    if (passwordRef.current?.value) {
      promises.push(updatePassword(passwordRef.current?.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Card>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert>{error}</Alert>}
          <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
              <label>Password</label>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
              <label>Password Confirmation</label>
              <input
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </form>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/user">Cancel</Link>
      </div>
    </>
  );
}
