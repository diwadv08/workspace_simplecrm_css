import React from "react";

const CustomerList = ({ customers, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Company</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td>{c.company}</td>
            <td>
              <button onClick={() => onEdit(c)} className="editBtn">Edit</button>
              <button onClick={() => onDelete(c.id)} className="deleteBtn">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerList;
