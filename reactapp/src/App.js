import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCustomers, addCustomer, updateCustomer, deleteCustomer } from "./api";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";


function App() {
  const [customers, setCustomers] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  const handleSave = async (customer) => {
    if (editing) {
      await updateCustomer(editing.id, customer);
      setEditing(null);
    } else {
      await addCustomer(customer);
    }
    fetchCustomers();
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    fetchCustomers();
  };

  const handleEdit = (customer) => {
    setEditing(customer);
  };

  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px", marginBottom: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/customers"
            element={
              <div>
                <h1>Customer Management</h1>
                <CustomerForm onSave={handleSave} editing={editing} />
                <CustomerList
                  customers={customers}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
