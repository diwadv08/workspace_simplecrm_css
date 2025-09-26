import React, { useState } from "react";
import { saveEntry } from "../api";

const GoalForm = () => {
  const [entry, setEntry] = useState({
    username: "john_doe",
    goalType: "",
    targetAmount: "",
    achievedAmount: "",
    date: ""
  });

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveEntry(entry);
    alert("Goal added!");
    setEntry({
      username: "john_doe",
      goalType: "",
      targetAmount: "",
      achievedAmount: "",
      date: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <input name="goalType" value={entry.goalType} onChange={handleChange} placeholder="Goal Type" required />
      <input name="targetAmount" type="number" value={entry.targetAmount} onChange={handleChange} placeholder="Target" required />
      <input name="achievedAmount" type="number" value={entry.achievedAmount} onChange={handleChange} placeholder="Achieved" required />
      <input name="date" type="date" value={entry.date} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
