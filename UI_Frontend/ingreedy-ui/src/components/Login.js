import React from "react";
import AuthenticationService from "../Authentication/AuthenticationService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Grid,
  Button,
  Container,
} from "@mui/material";
import { Alert } from "@mui/material";

export default function LoginComponent() {
  const navigate = useNavigate();

  const [hasLoginFailed, setHasLoginFailed] = useState(false);

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formValue;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const loginClicked = () => {
    AuthenticationService.executeJwtAuthenticationService(username, password)
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          username,
          response.data.token
        );
      })
      .then(() => navigate("/users"))
      .catch(() => {
        setHasLoginFailed(true);
      });
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            InGreedy
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        item
        direction="column"
        justify="center"
        alignItems="center"
        xs={12}
        style={{ textAlign: "center", padding: 10 }}
      >
        <Grid item xs={12}>
          <Typography variant="h3">Login</Typography>
        </Grid>
        <div>
          {hasLoginFailed && (
            <Grid item xs={12} style={{ padding: 10 }}>
              <Alert severity="error">Invalid Credentials</Alert>
            </Grid>
          )}
          <Grid item xs={12} style={{ padding: 10 }}>
            <TextField
              name="username"
              label="username"
              id="outlined-size-small"
              defaultValue="username"
              size="small"
              value={username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} style={{ padding: 10 }}>
            <TextField
              name="password"
              type="password"
              label="password"
              id="outlined-size-small"
              defaultValue="username"
              size="small"
              value={password}
              onChange={handleChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ padding: 10, marginLeft: "auto", marginRight: "auto" }}
          >
            <Button onClick={loginClicked} variant="contained">
              login
            </Button>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
