import React from "react";

const Header = () => {
    return (
        <div className="row align-items-center border-bottom p-0 m-0">
                <div className="col-6 fw-bold fs-5" style={{ color: "#F44B87" }}>
                    Dashboard
                </div>
                <div className="col-4 position-relative">
                    <input
                        type="text"
                        className="form-control rounded-3 bg-light border-0 ps-4"
                        placeholder="Search..."
                    />
                    <img
                        src="../imgs/Search.png"
                        alt="Search"
                        className="position-absolute"
                        style={{ top: '50%', right: '20px', transform: 'translateY(-50%)', height: '20px' }}
                    />
                </div>

                <div className="col-2 d-flex justify-content-end align-items-center gap-4 px-5">
                    <img src="../imgs/Bell 1.png" alt="Notification" height="20" />
                    <img src="../imgs/Question 1.png" alt="Help" height="20" />
                    <img src="../imgs/Avatar 313.png" alt="Avatar" className="rounded-circle" width="32" height="32" />
                </div>
            </div>
    )
}
export default Header