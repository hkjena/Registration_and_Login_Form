import React from "react";

const Wrapper = ({ children, svg }) => {
  return (
    <div className="flex justify-center items-center mt-20 mb-10">
      <div
        className="flex flex-col w-full max-w-sm mx-2 p-4 border rounded-lg border-green-500 bg-white relative"
        style={{ boxShadow: "0 0 5px green" }}
      >
        <div
          className="absolute"
          style={{
            top: "-12.5%",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <div className="border-4 border-green-400 border-double rounded-full h-24 w-24 flex items-center justify-center m-auto bg-white">
            {svg}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
