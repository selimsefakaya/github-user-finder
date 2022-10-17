import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
    const { alert } = useContext(AlertContext);

    return (
        alert !== null && (
            <div className="container my-2">
                <div
                    className={`alert alert-${alert.type} alert-dismissible fade show`}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {alert.message}
                    <button
                        type="button"
                        className="close btn btn-outline-dark btn-sm"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true" className="h4">
                            &times;
                        </span>
                    </button>
                </div>
            </div>
        )
    );
};

export default Alert;
