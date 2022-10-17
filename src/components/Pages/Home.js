import React, { Fragment } from "react";
import Search from "../Search";
import Users from "../Users";

const HomePage = () => {
    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    );
};

export default HomePage;
