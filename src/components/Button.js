import React from "react";

const Button = ({ name, type }) => {
  return (
    <button
      type={type}
      className="btn"
      style={{
        backgroundImage:
          "linear-gradient(to right, #009245, #00FF7F, #00A8C5, #D9E021)",
        boxShadow: "0 4px 15px 0 rgba(83, 176, 57, 0.75)"
      }}
    >
      {name}
    </button>
  );
};

export default Button;
