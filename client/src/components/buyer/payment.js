import {React, Conponent} from "react";
import { Link } from "react-router-dom";

class Payment extends Comment{
    render() {
    return(
        <div>
            <h2> Order Placed </h2>

            <Link to="/static-view"> Go back </Link>
        </div>
    );
    }
}

export default Payment;