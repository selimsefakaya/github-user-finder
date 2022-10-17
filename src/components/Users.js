import React, { useContext } from "react";
import User from "./User";
import Loading from "./Loading";
import GithubContext from "../context/github/githubContext";

const Users = () => {
    const { loading, users } = useContext(GithubContext);

    if (loading) {
        return <Loading />;
    } else {
        return (
            <div className="container mt-2">
                <div className="row">
                    {users.map((user) => (
                        <User key={user.id} user={user} />
                    ))}
                </div>
            </div>
        );
    }
};

export default Users;
