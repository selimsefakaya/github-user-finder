import React, { useState, useContext } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

function Search() {
    const [keyword, setKeyword] = useState("");
    const { users, searchUsers, clearResults } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    function onChange(e) {
        setKeyword(e.target.value);
        e.preventDefault();
    }

    function onSubmit(e) {
        if (keyword === "") {
            setAlert("Empty key", "danger");
        } else {
            searchUsers(keyword);
        }
        e.preventDefault();
    }

    return (
        <div className="d-grid container my-1">
            <form className="mt-1" onSubmit={onSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        value={keyword}
                        onChange={onChange}
                        className="form-control"
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-warning">
                            Search
                        </button>
                    </div>
                </div>
            </form>
            {users.length > 0 && (
                <button
                    type="button"
                    onClick={clearResults}
                    className="btn btn-secondary btn-block mt-2"
                >
                    Clear Results
                </button>
            )}
        </div>
    );
}

export default Search;
