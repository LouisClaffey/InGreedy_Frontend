import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export default function IngredientsTableFind() {
  const navigate = useNavigate();

  const [grains, setGrains] = useState("");
  const [proteins, setProteins] = useState("");
  const [vegetables, setVeg] = useState("");
  const [dairies, setDairy] = useState("");
  const [fruits, setFruit] = useState("");
  const [validated, setValidated] = useState(false);

  const ingredients = {
    grains,
    proteins,
    vegetables,
    dairies,
    fruits,
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/ingredients", ingredients)
      .then(() => navigate("/users/foundrecipes"));
  };

  useEffect(() => {
    if (
      grains.length > 0 &&
      proteins.length > 0 &&
      vegetables.length > 0 &&
      dairies.length > 0 &&
      fruits.length > 0
    ) {
      setValidated(true);
    }
  }, [grains, proteins, vegetables, dairies, fruits]);

  console.log(grains, proteins, vegetables, dairies, fruits);

  return (
    <>
      <form>
        <Container maxWidth="sm">
          <Typography
            variant="subtitle2"
            style={{ textAlign: "center", opacity: 0.5 }}
          >
            Choose an option from each category
          </Typography>
          <Grid
            container
            justifyContent="center"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl onChange={(e) => setGrains(e.target.value)}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{
                  justifyContent: "left",
                  paddingTop: 10,
                  color: "#1976d2",
                }}
              >
                Grains
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                style={{ textAlign: "center" }}
              >
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      value="pasta"
                      label="pasta"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="rice"
                      value="rice"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="seeds"
                      value="seeds"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="cereal"
                      value="cereal"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="flour"
                      value="flour"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="none"
                      value="none"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            container
            justifyContent="center"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl onChange={(e) => setProteins(e.target.value)}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{
                  justifyContent: "left",
                  paddingTop: 10,
                  color: "#1976d2",
                }}
              >
                Proteins
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="fish"
                      value="fish"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="beef"
                      value="beef"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="pork"
                      value="pork"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="eggs"
                      value="eggs"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="poultry"
                      value="poultry"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="none"
                      value="none"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            container
            justifyContent="center"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl onChange={(e) => setVeg(e.target.value)}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{
                  justifyContent: "left",
                  paddingTop: 10,
                  color: "#1976d2",
                }}
              >
                Vegetables
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="greens"
                      value="greens"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="potato"
                      value="potato"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="bulbs"
                      value="bulbs"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="roots"
                      value="roots"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="legumes"
                      value="legumes"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="none"
                      value="none"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            container
            justifyContent="center"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl onChange={(e) => setDairy(e.target.value)}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{
                  justifyContent: "left",
                  paddingTop: 10,
                  color: "#1976d2",
                }}
              >
                Dairies
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="yogurt"
                      value="yogurt"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="milk"
                      value="milk"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="cream"
                      value="cream"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="cheese"
                      value="cheese"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="butter"
                      value="butter"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="none"
                      value="none"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            container
            justifyContent="center"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl onChange={(e) => setFruit(e.target.value)}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{
                  justifyContent: "left",
                  paddingTop: 10,
                  color: "#1976d2",
                }}
              >
                Fruits
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="nuts"
                      value="nuts"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="tomato"
                      value="tomato"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="berries"
                      value="berries"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="banana"
                      value="banana"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="citrus"
                      value="citrus"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                  <Item>
                    <FormControlLabel
                      control={<Radio />}
                      label="none"
                      value="none"
                      labelPlacement="top"
                    />
                  </Item>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            item
            md={12}
            sm={12}
            xs={12}
          >
            <div style={{ paddingTop: 15, marginBottom: "5rem" }}>
              <Button
                variant="contained"
                onClick={handleClick}
                disabled={!validated}
              >
                Click to find recipe
              </Button>
            </div>
          </Grid>
        </Container>
      </form>
    </>
  );
}
