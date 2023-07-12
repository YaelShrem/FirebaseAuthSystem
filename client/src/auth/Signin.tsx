import { useRef, useState, FormEvent } from "react";
import { Button, Alert } from "@mui/material";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const StyledTextField = styled(TextField)`
  color: #20386F;

  & label.Mui-focused {
    color: #ACC7F0;
  }

  & .MuiInput-underline:before, &:hover .MuiInput-underline:before {
    border-bottom-color: #ACC7F0;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #865DFF;
  }
`;


const Signin=() =>{
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/");
      } catch {
        setError("Failed to log in");
      }

      setLoading(false);
    }
  }
  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2} 
            sx={{ height: "100%",
                  transform: 'scale(85%)'}}>
              <StyledTextField
                InputLabelProps={{
                  style: { color: '#799AD3'}
                }}
                fullWidth
                label="Email"
                variant="standard"
                name="email"
                required
                inputRef={emailRef}
                //sx={{transform: "scale(0.8)"}}
              />
              <StyledTextField
              InputLabelProps={{
                style: { color: '#799AD3'}
              }}
                fullWidth
                label="Password"
                variant="standard"
                name="password"
                type="password"
                required
                inputRef={passwordRef}
                //sx={{transform: "scale(0.8)"}}
              />
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
                    //transform: 'scale(0.8)'
                  }}
                  >
                    Enter Account
              </Button>
              </Grid>
        </form>
        <Typography variant="caption" sx={{ 
          color: '#799AD3', 
          marginTop: 2, 
          textAlign: 'center', 
          cursor: 'pointer',
          fontFamily: 'Inter',
          fontSize: '12px',
           }}>
        <Link to="/forgot-password">
                  Forgot your Password? We're here to help
                </Link>
        </Typography>
  </>
  )
}

export default Signin;