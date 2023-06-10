import { useState, useContext, createContext, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import Styles from "./styles.module.css";
import travelIcon from "./images/travel.png";

import { getPosts } from "./actions/posts.js";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <div className={Styles.appBar} position="static" color="inherit">
        <img
          className={Styles.image}
          src={travelIcon}
          alt="travel-image"
          height="60"
        />
        <Typography className={Styles.heading} variant="h1" fontSize={"50px"}>
          Travel note
        </Typography>
      </div>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
