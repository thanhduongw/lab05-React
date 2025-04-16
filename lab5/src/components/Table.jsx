import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditModal from "./EditModal";

const Table = ({ data, setData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const itemsPerPage = 6;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const getBadgeClasses = (status) => {
    switch (status) {
      case "New":
        return "badge rounded-pill text-primary bg-primary bg-opacity-10";
      case "In-progress":
        return "badge rounded-pill text-warning bg-warning bg-opacity-10";
      case "Completed":
        return "badge rounded-pill text-success bg-success bg-opacity-10";
      default:
        return "badge rounded-pill bg-secondary";
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (order) => {
    setDataUser(order);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDataUser({}); // Reset dataUser when closing
  };

  const handleSaveOrder = (updatedOrder) => {
    const updatedData = data.map((order) =>
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setData(updatedData);
    setShowModal(false);
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="row align-items-center mb-3">
        <div className="col-12 col-md-9">
          <div className="d-flex align-items-center">
            <img src="../imgs/File text 1.png" alt="Report icon" className="me-2" />
            <h4 className="fw-bold mb-0">Detailed report</h4>
          </div>
        </div>
        <div className="col-12 col-md-3 text-md-end mt-2 mt-md-0">
          <button
            className="btn btn-outline"
            style={{ color: "#F44B87", borderColor: "#F44B87" }}
          >
            <img src="../imgs/Download.png" alt="Import icon" /> Import
          </button>
          <button
            className="btn btn-outline ms-2"
            style={{ color: "#F44B87", borderColor: "#F44B87" }}
          >
            <img src="../imgs/Move up.png" alt="Export icon" /> Export
          </button>
        </div>
      </div>
      <div className="row flex-grow-1 mx-0">
        <div className="table-responsive">
          <table className="table table-hover border rounded-3">
            <thead className="table-light">
              <tr>
                <th scope="col">
                  <input type="checkbox" aria-label="Select all" />
                </th>
                <th scope="col">CUSTOMER NAME</th>
                <th scope="col">COMPANY</th>
                <th scope="col">ORDER VALUE</th>
                <th scope="col">ORDER DATE</th>
                <th scope="col">STATUS</th>
                <th scope="col" aria-label="Actions"></th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((order) => (
                <tr key={order.id}>
                  <td>
                    <input type="checkbox" aria-label={`Select ${order.customerName}`} />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={order.avatar}
                        alt={`${order.customerName}'s avatar`}
                        className="rounded-circle me-2"
                        style={{ width: "32px", height: "32px" }}
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
                    <button
                      className="btn btn-link p-0"
                      onClick={() => handleEditClick(order)}
                      aria-label={`Edit ${order.customerName}'s order`}
                    >
                      <img src="../imgs/create.png" alt="Edit icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-12 col-md-8 d-flex align-items-center">
          <h6 className="mb-0">{data.length} results</h6>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-end align-items-center">
          <button
            className="btn btn-outline-secondary mx-1 rounded-circle"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label="Previous page"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            const isActive = currentPage === pageNumber;
            return (
              <button
                key={pageNumber}
                className={`btn mx-1 rounded-circle ${isActive ? "text-white" : "btn-outline-secondary"
                  }`}
                style={isActive ? { background: "#F44B87", borderColor: "#F44B87" } : {}}
                onClick={() => handlePageChange(pageNumber)}
                aria-label={`Page ${pageNumber}`}
                aria-current={isActive ? "page" : undefined}
              >
                {pageNumber}
              </button>

            );
          })}
          <button
            className="btn btn-outline-secondary mx-1 rounded-circle"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label="Next page"
          >
            &gt;
          </button>
        </div>
      </div>
      <EditModal
        show={showModal}
        handleClose={handleCloseModal}
        dataUser={dataUser}
        handleSave={handleSaveOrder}
      />
    </div>
  );
};

export default Table;