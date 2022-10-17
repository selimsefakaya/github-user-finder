import React from "react";

const Repo = ({ repo }) => {
    return (
        <li className="list-group-item">
            <i className="far fa-dot-circle col-1" align="center"></i>
            <a className="btn col-11" href={repo.html_url} target="_blank">
                <div className="row">
                    <div className="col-md-9" align="start">
                        {" "}
                        {repo.name}
                    </div>
                    <div className="col-md-3">{repo.created_at}</div>
                </div>
            </a>
        </li>
    );
};
export default Repo;
