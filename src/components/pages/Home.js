import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";

export const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
