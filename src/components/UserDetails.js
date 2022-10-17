import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Repos from "./Repos";
import GithubContext from "../context/github/githubContext";

const UserDetails = () => {
    const userInfo = useParams();

    const { user, loading, getUser, getUserRepos, repos } =
        useContext(GithubContext);

    useEffect(() => {
        getUser(userInfo.login);
        getUserRepos(userInfo.login);
    }, []);

    const {
        name,
        avatar_url,
        location,
        html_url,
        bio,
        blog,
        following,
        followers,
        public_repos,
    } = user;

    if (loading) {
        return <Loading />;
    } else {
        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={avatar_url} alt="" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">{name ? name : "null"}</p>
                                <p>
                                    <i className="fas fa-map-marker-alt"></i>{" "}
                                    {location ? location : "null"}
                                </p>
                                <p>
                                    <a
                                        className="btn btn-primary btn-sm col-12"
                                        target="_blank"
                                        href={html_url}
                                    >
                                        Github Profile
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                {bio && (
                                    <>
                                        <h3>About</h3>
                                        <p>{bio}</p>
                                    </>
                                )}
                                {blog && (
                                    <>
                                        <h4>
                                            <a
                                                className="btn btn-secondary"
                                                href={blog}
                                                target="_blank"
                                            >
                                                Blog: {blog}
                                            </a>
                                        </h4>
                                    </>
                                )}
                                <div>
                                    <span className="badge bg-primary m-1">
                                        Following: {following}
                                    </span>
                                    <span className="badge bg-primary m-1">
                                        Followers: {followers}
                                    </span>
                                    <span className="badge bg-success m-1">
                                        Repos: {public_repos}
                                    </span>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <Repos repos={repos} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default UserDetails;
