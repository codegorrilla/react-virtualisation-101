import React from "react";
// Explicitly use FixedSizeList from the stable version
import { FixedSizeList as List } from "react-window";

// 1. Generate 1,000 mock data items
const USER_DATA = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `User Profile ${index + 1}`,
  email: `user${index + 1}@example.com`,
}));

// 2. Define the individual Row Component
// CRITICAL: You MUST spread the 'style' prop onto your outermost row container!
const Row = ({ index, style }) => {
  const user = USER_DATA[index];

  return (
    <div
      style={{
        ...style, // Absolutely critical for positioning layout
        display: "flex",
        alignItems: "center",
        padding: "0 15px",
        borderBottom: "1px solid #eee",
        boxSizing: "border-box",
        backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
      }}
    >
      <strong style={{ marginRight: "15px" }}>#{user.id}</strong>
      <span style={{ flex: 1 }}>{user.name}</span>
      <span style={{ color: "#666" }}>{user.email}</span>
    </div>
  );
};

// 3. Main Export Component
export default function VirtualList() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>User Directory (Virtualized)</h3>

      {/* 
        In v1.8.11, the row component is passed as a child function, 
        and properties are named itemCount and itemSize.
      */}
      <List
        height={400} // Height of the window container
        width="100%" // Width of the window container
        itemCount={USER_DATA.length} // Total records
        itemSize={50} // Height of each individual row
      >
        {Row}
      </List>
    </div>
  );
}
