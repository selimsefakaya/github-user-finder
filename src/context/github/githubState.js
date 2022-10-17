import React, { useReducer } from "react";
import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext";
import axios from "axios";

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: true,
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = (keyword) => {
        setLoading();
        axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then((response) => {
                dispatch({
                    type: "SEARCH_USERS",
                    payload: response.data.items,
                });
            })
            .catch((error) => console.log(error));
    };

    const getUser = (username) => {
        setLoading();
        axios.get(`https://api.github.com/users/${username}`).then((response) => {
            dispatch({
                type: "GET_USER",
                payload: response.data,
            });
        });
    };

    const getUserRepos = (username) => {
        setLoading();
        axios
            .get(`https://api.github.com/users/${username}/repos`)
            .then((response) => {
                dispatch({
                    type: "GET_REPOS",
                    payload: response.data,
                });
            });
    };

    const setLoading = () => {
        dispatch({ type: "SET_LOADING" });
    };

    const clearResults = (e) => {
        dispatch({ type: "CLEAR_RESULTS" });
        e.preventDefault();
    };

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearResults,
                getUser,
                getUserRepos,
            }}
        >
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;
