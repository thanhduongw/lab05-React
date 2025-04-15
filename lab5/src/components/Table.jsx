import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Table = ({data}) =>{
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
    return(
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
                {data.map((order)=>(
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
    )
}
export default Table;