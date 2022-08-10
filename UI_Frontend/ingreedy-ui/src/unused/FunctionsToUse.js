/** this file is to demonstrate how the author would have
 *  implemented a delete function, so that a user could delete a recipe
 */

// export default function unused() {
//   const [clicked, setClicked] = useState(false);
//   const [deleteClicked, setDeleteClicked] = useState(false);

//   useEffect(() => {
//     if (deleteClicked === true) {
//       axios.delete("http://localhost:8080/users/home").then((response) => {
//         const recipeResponse = response.data;
//         setRecipes(recipeResponse);
//       });
//     }
//   }, [deleteClicked]);

//   return (
//     <>
//       <Container>
//         <Button variant="contained" onClick={() => setClicked(!clicked)}>
//           Click to see Recipes
//         </Button>
//         <Button
//           variant="contained"
//           onClick={() => setDeleteClicked(!deleteClicked)}
//         >
//           Click to delete recipe
//         </Button>
//       </Container>
//       <div>
//         <BrowserRouter>
//           <main>
//             <Box
//               sx={{
//                 bgcolor: "background.paper",
//                 pt: 2,
//                 pb: 2,
//               }}
//             >
//               <NavLink style={{ padding: 10 }} to="submit-ingredients">
//                 Submit Ingredient
//               </NavLink>
//               <NavLink style={{ padding: 10 }} to="recipes-homepage">
//                 View Recipes
//               </NavLink>
//             </Box>
//           </main>
//           <Routes>
//             <Route
//               exact
//               path="/submit-ingredients"
//               element={<IngredientsTable />}
//             />
//             <Route
//               exact
//               path="/recipes-homepage"
//               element={<RecipeHomepage />}
//             />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }
