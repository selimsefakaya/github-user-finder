import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = ({ user }) => {
    return (
        <div className="col-md-4 col-sm-6 col-lg-3">
            <div className="card mt-2">
                <img src={user.avatar_url} alt="" className="img-fluid" />
                <div className="card-body">
                    <h4 className="card-title">
                        {user.id}-{user.login}
                    </h4>
                    <div className="row">
                        <Link
                            to={`/users/${user.login}`}
                            className="btn btn-primary btn-sm float-left"
                        >
                            Detail
                        </Link>
                        <a
                            href={user.html_url}
                            target="_blank"
                            className="btn btn-primary btn-sm float-right mt-1"
                        >
                            Profile
                        </a>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default User;
