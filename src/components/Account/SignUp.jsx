import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const signUp = () => {
    alert("sign up");
    navigate("/");
  };

  return (
    <Stack
      maxWidth={400}
      height={350}
      mx="auto"
      spacing={2}
      justifyContent="center"
    >
      <TextField fullWidth label="Nickname" type="text" variant="outlined" />
      <TextField
        fullWidth
        label="Email Address"
        type="email"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Check Password"
        type="password"
        variant="outlined"
      />
      <Button variant="outlined" onClick={signUp}>
        Sign Up
      </Button>
    </Stack>
  );
}
