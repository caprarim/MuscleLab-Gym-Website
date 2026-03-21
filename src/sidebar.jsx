import React from "react";

const SideBar = ({ click1, click2, click3, click4 }) => {
  const assetBase = import.meta.env.BASE_URL;
  return (
    <>
      <header className="gym-header unified-sidebar">
        <nav className="gym-nav unified-sidebar-nav">
          <span className="gym-nav-item unified-sidebar-item" onClick={click2}>
            Home
          </span>
          <span className="gym-nav-item unified-sidebar-item" onClick={click3}>
            Why Muscle Lab Gym
          </span>
          <img
            className="gym-nav-logo unified-sidebar-logo"
            src={`${assetBase}muscle.jpg`}
            alt="Muscle Lab Gym logo"
            onClick={click2}
          />
          <span className="gym-nav-item unified-sidebar-item" onClick={click1}>
            About Us
          </span>
          <span className="gym-nav-item unified-sidebar-item" onClick={click4}>
            Memberships
          </span>
        </nav>
      </header>
    </>
  );
};

export default SideBar;
