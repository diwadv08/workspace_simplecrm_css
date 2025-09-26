const API_URL = "https://8080-fbdedafcaedabcdd333220481ebaccebeedctwo.premiumproject.examly.io/api/customers";

export const getCustomers = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addCustomer = async (customer) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });
  return res.json();
};

export const updateCustomer = async (id, customer) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });
  return res.json();
};

export const deleteCustomer = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
