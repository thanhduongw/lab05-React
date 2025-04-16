import React, { useEffect, useState } from "react";
import CardOverView from "../components/CardOverView";
import Table from "../components/Table";

const Dashboard = () => {
  const [overViewData, setOverViewData] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://67f59cbe913986b16fa51f11.mockapi.io/order');
        const data = await response.json();
        setDataOrder(data);
      } catch (error) {
        console.error('Error fetching order data:', error); 
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="row" style={{ height: "28vh" }}>
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
      <div className="row" style={{ height: "64vh" }}>
        <Table data={dataOrder} setData={setDataOrder} />
      </div>
    </>
  );
};

export default Dashboard;
