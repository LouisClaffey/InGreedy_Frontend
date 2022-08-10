import React, { useEffect, useState } from "react";
import "../App.css";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import axios from "axios";
import { Paper } from "@mui/material";
import { styled } from "@mui/material";

export default function RecipesFoundMobile() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
  }));

  const [recipes, setRecipes] = useState();
  const [noResults, setNoResutls] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/found")
      .then((response) => {
        const recipeResponse = response.data;
        setRecipes(recipeResponse);
        if (recipeResponse.length === 0) {
          setNoResutls("No such recipe exists.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {recipes &&
        recipes.map((recipes) => (
          <Item style={{ marginBottom: "4rem" }}>
            <Grid key={recipes.id} container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography
                  variant="h3"
                  style={{
                    textAlign: "center",
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    marginBottom: 10,
                  }}
                >
                  {recipes?.title.toLowerCase()}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              ></Grid>
              <Grid item xs={12} style={{ paddingBottom: 20 }}>
                <Typography variant="subtitle1">
                  {recipes?.instructions}
                </Typography>
              </Grid>
            </Grid>
          </Item>
        ))}
      <Grid
        container
        item
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography>{noResults}</Typography>
      </Grid>
    </>
  );
}
