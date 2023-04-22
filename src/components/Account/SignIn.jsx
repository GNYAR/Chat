import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const signIn = () => {
    alert("sign in");
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
      <TextField
        fullWidth
        label="Email Address"
        type="email"
        variant="outlined"
      />
      <TextField fullWidth label="Password" type="email" variant="outlined" />
      <Button variant="contained" onClick={signIn}>
        Sign In
      </Button>
    </Stack>
  );
}
