import React from "react";

export const Loader = () => {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(0, 0, 0)",
      zIndex: 9999
    }}>
      <div style={{
        width: "60px",
        height: "60px",
        border: "6px solid red",
        borderTop: "6px solid transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};
          