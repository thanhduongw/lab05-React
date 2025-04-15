import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
const Dashboard = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 border border-3" style={{height:"100vh"}}>
                    Nav
                </div>
                <div className="col-9">
                    <div className="row border border-3" style={{height:"10vh"}}>
                        Header
                    </div>
                    <div className="row border border-3" style={{height:"30vh"}}>
                        Overview
                    </div>
                    <div className="row border border-3" style={{height:"60vh"}}>
                        Table
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;