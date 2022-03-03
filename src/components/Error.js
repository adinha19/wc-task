import React from "react";
import { useSelector } from "react-redux";

const Error = () => {
    const error = useSelector(state => state.errors.error)
    console.log(error)

    return (<div className="text-center mt-5">
        {error}
    </div>)
}

export default Error