import React from "react";
import Header from "./Header";

function Group({ children }) {
  return (
    <div className="alx-component">
      <Header type="useContext" />
      {children}
    </div>
  );
}

export default Group;
