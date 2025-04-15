import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const menuItems = [
    { to: '/', label: 'Dashboard', icon: '../imgs/Folder.png' },
    { to: '/projects', label: 'Projects', icon: '../imgs/Folder.png' },
    { to: '/teams', label: 'Teams', icon: '../imgs/Groups.png' },
    { to: '/analytics', label: 'Analytics', icon: '../imgs/Pie chart.png' },
    { to: '/messages', label: 'Messages', icon: '../imgs/Chat.png' },
    { to: '/integrations', label: 'Integrations', icon: '../imgs/Code.png' }
  ];

  return (
    <div className="d-flex flex-column justify-content-between bg-white p-4 border-end" style={{ minHeight: "100vh" }}>
      <div>
        <div className="mb-4 d-flex align-items-center gap-2">
          <img src="../imgs/Image 1858.png" alt="Logo" style={{ height: 30 }} />
        </div>
        <div className="d-flex flex-column gap-2">
          {menuItems.map((item, index) => (
            <NavLink to={item.to} key={index} className="text-decoration-none">
              {({ isActive }) => (
                <div
                  className={`d-flex align-items-center gap-2 rounded p-2 ${isActive ? 'text-white' : 'text-secondary'}`}
                  style={isActive ? { backgroundColor: '#F44B87' } : {}}
                >
                  <img src={item.icon} alt={item.label} style={{ height: 20 }} />
                  <span>{item.label}</span>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="text-center bg-light p-3 rounded mt-4">
        <img src="../imgs/Group.png" alt="Banner" className="img-fluid mb-2" />
        <div className="fw-bold">V2.0 is available</div>
        <button className="btn btn-outline-primary btn-sm mt-2">Try now</button>
      </div>
    </div>
  );
};

export default Navbar;