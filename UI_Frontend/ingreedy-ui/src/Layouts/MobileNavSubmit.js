import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { useState } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import IngredientsTableSubmit from "../components/IngredientsTableSubmit";

export default function MobileNavSubmit() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navToSubmit = () => {
    navigate("/users/submit");
  };

  const navToFind = () => {
    navigate("/users/find");
  };

  const navToHome = () => {
    navigate("/users");
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            InGreedy
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={"xs"} style={{ marginTop: "5rem" }}>
        <IngredientsTableSubmit></IngredientsTableSubmit>
      </Container>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            onClick={navToSubmit}
            label="Submit"
            value="submit"
            icon={<DinnerDiningIcon />}
          />
          <BottomNavigationAction
            onClick={navToFind}
            label="Find"
            value="find"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            onClick={navToHome}
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
