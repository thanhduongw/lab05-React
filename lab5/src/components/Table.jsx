import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const getBadgeClasses = (status) => {
        switch (status) {
            case 'New':
                return 'badge rounded-pill text-primary bg-primary bg-opacity-10';
            case 'In-progress':
                return 'badge rounded-pill text-warning bg-warning bg-opacity-10';
            case 'Completed':
                return 'badge rounded-pill text-success bg-success bg-opacity-10';
            default:
                return 'badge rounded-pill bg-secondary';
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="row" style={{ height: "8vh" }}>
                <div className="col-9">
                    <div className="d-flex align-items-center mb-2">
                        <img src="../imgs/File text 1.png" alt="" className="me-2" />
                        <h4 className="fw-bold mb-0">Detailed report</h4>
                    </div>
                </div>
                <div className="col-3">
                    <button className="btn me-2" style={{ color: '#F44B87', borderColor: "#F44B87" }}>
                        <img src="../imgs/Download.png" alt="" />Import
                    </button>
                    <button className="btn btn-hover" style={{ color: '#F44B87', borderColor: "#F44B87" }}>
                        <img src="../imgs/Move up.png" alt="" />Export
                    </button>
                </div>
            </div>
            <div className="row mx-0" style={{ height: "48vh" }}>
                <table className="table table-hover border rounded-3">
                    <thead className="table-light">
                        <tr>
                            <th><input type="checkbox" name="" id="" /></th>
                            <th>CUSTOMER NAME</th>
                            <th>COMPANY</th>
                            <th>ORDER VALUE</th>
                            <th>ORDER DATE</th>
                            <th>STATUS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((order) => (
                            <tr key={order.id}>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={order.avatar}
                                            alt={order.customerName}
                                            className="rounded-circle me-2"
                                            style={{ width: '32px', height: '32px' }}
                                        />
                                        <span>{order.customerName}</span>
                                    </div>
                                </td>
                                <td>{order.company}</td>
                                <td>${order.orderValue}</td>
                                <td>{order.orderDate}</td>
                                <td>
                                    <span className={getBadgeClasses(order.status)}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn btn-link p-0">
                                        <img src="../imgs/create.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="row" style={{ height: "8vh" }}>
                <div className="col-8  d-flex align-items-center">
                    <h6>{data.length} results</h6>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <button
                        className="btn btn-outline-secondary mx-1 rounded-5"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        &lt;
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNumber = index + 1;
                        const isActive = currentPage === pageNumber;
                        return (
                            <button
                                key={pageNumber}
                                className={`btn mx-1 rounded-5 ${isActive ? 'text-white' : 'btn-outline-secondary'}`}
                                style={isActive ? { backgroundColor: "#F44B87" } : {}}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    <button
                        className="btn btn-outline-secondary mx-1 rounded-5"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </>
    );
};

export default Table;
