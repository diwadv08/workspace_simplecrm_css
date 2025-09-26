import React, { useState, useEffect } from "react";

const CustomerForm = ({ onSave, editing }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });

  // When editing changes, prefill form
  useEffect(() => {
    if (editing) {
      setForm(editing);
    } else {
      setForm({ name: "", email: "", phone: "", company: "" });
    }
  }, [editing]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: "", email: "", phone: "", company: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
