import React, { useLayoutEffect, useState } from "react";
import logo from "../Images/MyNote-logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import getCookie from "../utils/getCookie";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//redux
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../redux/user/action";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a
        color="inherit"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/AKASH-PRASAD7"
      >
        Akash Prasad
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Registar = () => {
  //cookie
  const [cookie, setCookie] = useState();
  // setCookie(getCookie("jwtToken"));

  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((globalstate) => globalstate.user.data);

  let userData = {};
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    userData = {
      name: `${data.get("firstName")} ${data.get("lastName")}`,
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(signUp(userData));
  };

  // useLayoutEffect(() => {
  //   if (cookie) {
  //     navigate("/home");
  //   }
  //   // eslint-disable-next-line
  // }, [state, cookie]);

  return (
    <>
      <section>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <img src={logo} alt="logo" />
              </Avatar>
              <Typography className="text-center" component="h1" variant="h5">
                <p>
                  <u>My Notes</u>
                </p>
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      to="/"
                      className="text-cyan-700 hover:underline"
                      variant="body2"
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </section>
    </>
  );
};

export default Registar;
