import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainHomepage from "./Layouts/MainHomepage";
import { Route } from "react-router-dom";
import FindRecipe from "./Layouts/FindRecipe";
import SubmitPage from "./Layouts/SubmitPage";
import FoundRecipes from "./Layouts/FoundRecipes";

function App({ history }) {
  return (
    <>
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/users" element={<MainHomepage />} />
          <Route path="/users/find" element={<FindRecipe />} />
          <Route path="/users/submit" element={<SubmitPage />} />
          <Route path="/users/foundrecipes" element={<FoundRecipes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
