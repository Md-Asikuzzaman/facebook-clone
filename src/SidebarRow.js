import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ title, Icon, imageSrc }) => {
  return (
    <div className="sidebarRow">
      {Icon && <Icon src={imageSrc} />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
