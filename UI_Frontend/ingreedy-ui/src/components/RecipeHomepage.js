import React, { useEffect, useState } from "react";
import "../App.css";
import { autocompleteClasses, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import axios from "axios";
import { Paper } from "@mui/material";
import { styled } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Recipes() {
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
              >
                <TableContainer style={{ marginBottom: 10 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ fontWeight: "bold" }}>
                          grains
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                          proteins
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                          vegetables
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                          dairies
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                          fruits
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{recipes?.grains}</TableCell>
                        <TableCell>{recipes?.proteins}</TableCell>
                        <TableCell>{recipes?.vegetables}</TableCell>
                        <TableCell>{recipes?.dairies}</TableCell>
                        <TableCell>{recipes?.fruits}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
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
