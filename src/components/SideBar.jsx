import React from "react";

export default function SideBar(props) {
  const { handleToggleModal, data } = props;

  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>{data?.title || "No Title Available"}</h2>
        <div className="descriptionContainer">
          <h4>{data?.date || "Unknown Date"}</h4>
          <p className="descriptionTitle">
            {data?.explanation || "No description provided."}
          </p>
        </div>
        <button onClick={handleToggleModal} aria-label="Close Sidebar">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
