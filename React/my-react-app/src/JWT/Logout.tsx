import React from "react";

const Logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
  return <div>Logout</div>;
};

export default Logout;
