import { List } from "react-window";

// 1. Generate 1,000 fake users
const items = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `User Profile ${index + 1}`,
  status: index % 2 === 0 ? "Active" : "Pending",
}));

// 2. Define the Row Component
// CRITICAL: You must pass 'style' to your DOM element so react-window can position it.
const Row = ({ index, style }) => {
  const item = items[index];

  return (
    <div
      style={{
        ...style, // Apply the absolute positioning provided by react-window
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
        backgroundColor: index % 2 ? "#f8f9fa" : "#ffffff",
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

// 3. The List Component
export default function VirtualList() {
  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: "8px",
        width: "350px",
        margin: "0 auto",
      }}
    >
      <h3
        style={{
          padding: "10px",
          margin: 0,
          borderBottom: "1px solid #ccc",
          background: "#eee",
        }}
      >
        React 19 Virtual List
      </h3>

      <List
        height={400}
        width="100%"
        rowCount={items.length}
        rowHeight={50}
        rowComponent={Row} // Pass it here as a configuration prop
      />
    </div>
  );
}
