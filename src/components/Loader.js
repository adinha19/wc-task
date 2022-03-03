import React from "react";

const Loader = () => {

    return (<div className="position-absolute top-50 start-50 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>)
}

export default Loader