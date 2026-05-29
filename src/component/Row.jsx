// import React from "react";
// import { userLists } from "../data.js";

//1. Generate 1,000 fake users

export const userLists = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `User Profile ${i + 1}`,
  status: i % 2 === 0 ? "Active" : "Pending",
}));

//const items = userLists;

const Row = ({ index, style }) => {
  const item = userLists[index];

  return (
    <div
      style={{
        ...style, //Apply the absolute positioning provided by React wndow
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
        backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
        borderBottom: "1px solid #eee",
      }}
    >
      <span style={{ fontWeight: "bold", marginRight: "10px" }}>
        #{item.id}
      </span>
      <span style={{ flex: 1 }}>{item.name}</span>
      <span
        style={{
          padding: "4px 8px",
          borderRadius: "12px",
          fontSize: "0.8em",
          backgroundColor: item.status === "Active" ? "#e6fffa" : "#fff5f5",
          color: item.status === "Active" ? "#047857" : "#c53030",
        }}
      >
        {item.status}
      </span>
    </div>
  );
};

export default Row;
