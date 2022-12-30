import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Actors, MovieInformation, Movies, Profile, NavBar } from "./";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/" element={<Movies />} />
          <Route path="/Actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
