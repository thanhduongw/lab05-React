import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import CardOverView from "../components/CardOverView";
const Dashboard = () => {

    const [overViewData, setOverViewData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://67f59cbe913986b16fa51f11.mockapi.io/overview');
                const data = await response.json();
                setOverViewData(data);
            } catch (error) {
                console.error('Error fetching overview data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 border border-3" style={{ height: "100vh" }}>
                    Nav
                </div>
                <div className="col-9">
                    <div className="row border border-start-0 border-3" style={{ height: "10vh" }}>
                        Header
                    </div>
                    <div className="row border border-start-0 border-3" style={{ height: "30vh" }}>
                        <div className="d-flex align-items-center mb-2">
                            <img src="../imgs/Squares four 1.png" alt="" className="me-2" />
                            <h4 className="fw-bold mb-0">Overview</h4>
                        </div>
                        <div className="row row-cols-3"> 
                            {overViewData.map((data, index) => (
                                <div className="col" key={index}>
                                    <CardOverView overViewData={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row border border-3" style={{ height: "60vh" }}>
                        Table
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;