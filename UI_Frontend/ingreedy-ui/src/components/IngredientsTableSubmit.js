import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ContactlessOutlined } from "@material-ui/icons";

export default function IngredientsTableSubmit() {
  const [formValue, setFormValue] = useState({
    recipeTitle: "",
    recipeInstructions: "",
  });

  const handleChangeTextBoxes = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const navigate = useNavigate();

  const [grains, setGrains] = useState("");
  const [proteins, setProteins] = useState("");
  const [vegetables, setVeg] = useState("");
  const [dairies, setDairy] = useState("");
  const [fruits, setFruit] = useState("");
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [validated, setValidated] = useState(false);
  const [recipeArr, setRecipeArr] = useState([]);
  const [noneArr, setNoneArr] = useState([]);

  const recipe = {
    title,
    grains,
    proteins,
    vegetables,
    dairies,
    fruits,
    instructions,
  };

  useEffect(() => {
    setRecipeArr([grains, proteins, vegetables, dairies, fruits]);
  }, [grains, proteins, vegetables, dairies, fruits]);

  useEffect(() => {
    let result = recipeArr.filter((word) => word === "none");
    setNoneArr(result);
  }, [recipeArr]);

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/recipes", recipe)
      .then(() => navigate("/users"));
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

  const { recipeTitle, recipeInstructions } = formValue;

  const formik = useFormik({
    initialValues: {
      recipeTitle: "",
      recipeInstructions: "",
    },
    validationSchema: Yup.object({
      recipeTitle: Yup.string()
        .max(100, "Must be less than 100 characters")
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      recipeInstructions: Yup.string()
        .min(100, "Instructions must be over 100 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Container maxWidth="sm">
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            sx={{
              "& .MuiTextField-root": { m: 0, width: "100%" },
            }}
          >
            <div onChange={(e) => setTitle(e.target.value)}>
              <TextField
                id="outlined-multiline-flexible"
                label="Recipe Title"
                multiline
                name="recipeTitle"
                maxRows={4}
                value={recipeTitle}
                onChange={handleChangeTextBoxes}
                {...formik.getFieldProps("recipeTitle")}
              />
            </div>
            {formik.touched.recipeTitle && formik.errors.recipeTitle ? (
              <Alert severity="error">{formik.errors.recipeTitle}</Alert>
            ) : null}
          </Grid>
          <Typography
            variant="subtitle2"
            style={{ textAlign: "center", opacity: 0.5, marginTop: 10 }}
          >
            Choose an option from each category
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ textAlign: "center", opacity: 0.5, marginTop: 10 }}
          >
            You can only choose 'none' 2 times
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
            item
            md={12}
            sm={12}
            xs={12}
            sx={{
              "& .MuiTextField-root": {
                marginTop: 3,
                width: "100%",
              },
            }}
          >
            <div onChange={(e) => setInstructions(e.target.value)}>
              <TextField
                id="outlined-multiline-static"
                placeholder="Instructions"
                multiline
                name="recipeInstructions"
                value={recipeInstructions}
                rows={4}
                onChange={handleChangeTextBoxes}
                {...formik.getFieldProps("recipeInstructions")}
              />
            </div>
            {formik.touched.recipeInstructions &&
            formik.errors.recipeInstructions ? (
              <Alert severity="error">{formik.errors.recipeInstructions}</Alert>
            ) : null}
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            itemitem
            md={12}
            sm={12}
            xs={12}
          >
            <div style={{ paddingTop: 20, marginBottom: "5rem" }}>
              <Button
                variant="contained"
                onClick={handleClick}
                disabled={!formik.isValid || !validated || noneArr.length > 2}
              >
                Click to submit recipe
              </Button>
            </div>
          </Grid>
        </Container>
      </form>
    </>
  );
}
