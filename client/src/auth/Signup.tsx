import React, { useRef, useState } from "react"
import { Alert } from "@mui/material";
import { useAuth } from "./AuthContext"
import { useNavigate } from "react-router-dom"
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import { transform } from "framer-motion";

const StyledTextField = styled(TextField)`
  color: #20386F;

  & label.Mui-focused {
    color: #ACC7F0;
  }
  & .MuiInput-underline:before {
    border-bottom-color: #ACC7F0;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #865DFF;
  }
`;
// interface SignupFormData {
//   email: string;
//   password: string;
//   passwordConfirm: string;
// }

const Signup=() =>{
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const jobTitleRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
    if (passwordRef?.current?.value !== passwordConfirmRef?.current?.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
      emailRef.current?.value ?? '', 
      passwordRef.current?.value ?? '', 
      firstNameRef.current?.value ?? '',
      lastNameRef.current?.value ?? '',
      companyNameRef.current?.value ?? '',
      jobTitleRef.current?.value ?? ''
      );
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
          {error && <Alert>{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Email"
                    variant="standard"
                    name="email"
                    required
                    type="email"
                    inputRef={emailRef}
                    InputLabelProps={{
                      style: { color: '#799AD3'}
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="First Name"
                    variant="standard"
                    name="firstName"
                    inputRef={firstNameRef}
                    required
                    autoComplete="given-name"
                    autoFocus
                    InputLabelProps={{
                      style: { color: '#799AD3'}
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Last Name"
                    variant="standard"
                    name="lastName"
                    required
                    inputRef={lastNameRef}
                    autoComplete="family-name"
                    InputLabelProps={{
                      style: { color: '#799AD3'}
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Company Name"
                    variant="standard"
                    name="companyName"
                    inputRef={companyNameRef}
                    InputLabelProps={{
                      style: { color: '#799AD3'}
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Job Title"
                    variant="standard"
                    name="jobTitle"
                    inputRef={jobTitleRef}
                    InputLabelProps={{
                      style: { color: '#799AD3'}
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    inputRef={passwordRef}
                    InputLabelProps={{
                      style: { color: '#799AD3'}
                    }}
                  />
                  <StyledTextField 
                  fullWidth
                  variant="standard"
                  label="Confirm Password"
                  type="password" 
                  inputRef={passwordConfirmRef} 
                  required 
                  InputLabelProps={{
                    style: { color: '#799AD3'}
                  }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel              
                    control=
                    {<Checkbox 
                    sx={{ color:'#799AD3'}}
                     name="agreeToTerms"disableRipple/>}
                     sx={{ color:'#799AD3'}}
                    label="I Agree to all Terms of Use and Privacy Policy"
                  />
                </Grid>
                <Grid item xs={12}>
                <Button
                    disabled={loading}
                    type="submit"
                    variant="contained"
                    fullWidth
                    disableElevation
                    disableRipple
                    sx={{backgroundColor: '#D3BEFF',
                    '&:hover': {
                      backgroundColor: '#865DFF'
                    },
                  }}
                  >
                    Create Account
                  </Button>
                </Grid>
            </form>
      </>
  );
}

export default Signup;
