import React from "react";
import loading from "./loading2.gif";

const Loading = () => {
    return (
        <React.Fragment>
            <img
                src={loading}
                alt="Loading.."
                style={{ width: "30%", display: "block", margin: "auto" }}
            />
            <h4 style={{ textAlign: "center" }}>
                Type the key you want to search and submit.
            </h4>
        </React.Fragment>
    );
};

export default Loading;
