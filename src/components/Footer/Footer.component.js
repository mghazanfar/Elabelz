import React from "react";

const Footer = props => (
  <div
    style={{
      height: 250,
      display: "flex",
      flex: 1,
      backgroundImage:
        "linear-gradient(204deg, rgb(20, 165, 222), rgb(0, 0, 0))",
      justifyContent: "center"
    }}
  >
    <img
      src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1466798450/noxvhcbgieswr9t0g5wo.jpg"
      style={{ width: 200, height: 200 }}
    />
  </div>
);

export default Footer;
