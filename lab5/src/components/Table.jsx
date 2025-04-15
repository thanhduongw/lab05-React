import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Table = ({data}) =>{
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
                
            </tbody>
        </table>
    )
}
export default Table;