//1. Generate 1,000 fake users

export const userLists = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `User Profile ${i + 1}`,
  status: i % 2 === 0 ? "Active" : "Pending",
}));
