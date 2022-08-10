import React, { useEffect, useState } from "react";
import "../App.css";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import axios from "axios";
import { Paper } from "@mui/material";
import { styled } from "@mui/material";

export default function RecipesMobile() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
  }));

  const [recipes, setRecipes] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/home")
      .then((response) => {
        const recipeResponse = response.data;
        setRecipes(recipeResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {recipes &&
        recipes.map((recipes) => (
          <Item style={{ marginBottom: "2rem" }}>
            <Grid key={recipes.id} container>
              <Grid item xs={12}>
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
              <Grid item xs={12} style={{ paddingBottom: 20 }}>
                <Typography variant="subtitle1">
                  {recipes?.instructions}
                </Typography>
              </Grid>
            </Grid>
          </Item>
        ))}
    </>
  );
}
