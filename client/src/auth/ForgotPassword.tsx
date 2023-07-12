import React, { useRef, useState, FormEvent } from "react";
import { Button, Card, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (emailRef.current?.value) {
      try {
        setMessage("");
        setError("");
        setLoading(true);
        await resetPassword(emailRef.current.value);
        setMessage("Check your inbox for further instructions");
      } catch {
        setError("Failed to reset password");
      }

      setLoading(false);
    }
  }

  return (
    <>
      <Card>
        <h2 className="text-center mb-4">Password Recovery</h2>
        {error && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert>}
        <form onSubmit={handleSubmit}>
          Enter the email associated with your account and we'll
          send you an email with instructions to reset your password
          <label>Email</label>
          <TextField type="email" inputRef={emailRef} required />
          <Button disabled={loading} className="w-100" type="submit">
            Reset My Password
          </Button>
        </form>
        <div className="w-100 text-center mt-3">
          <Link to="/login">Login</Link>
        </div>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
