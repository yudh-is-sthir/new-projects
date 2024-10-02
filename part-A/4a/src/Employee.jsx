import React, { useState } from "react";

const EmployeeDetails = () => {
  // Initial employee state
  const [toggle, setToggle] = useState(false);
  const [employee, setEmployee] = useState({
    name: "John Doe",
    address: "123 Main St, New York, NY",
    company: "ABC Corporation",
  });

  // Function to change the name and address
  const handleChange = () => {
    setToggle(!toggle)
    setEmployee(
      toggle
        ? {
            ...employee,
            name: "Jane Smith",
            address: "456 Elm St, Los Angeles, CA",
          }
        : {
            ...employee,
            name: "John Doe",
            address: "123 Main St, New York, NY",
          }
    );
  };

  return (
    <div>
      <h2>Employee Details</h2>
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
      <p>
        <strong>Address:</strong> {employee.address}
      </p>
      <p>
        <strong>Company:</strong> {employee.company}
      </p>

      <button onClick={handleChange}>CHANGE</button>
    </div>
  );
};

export default EmployeeDetails;
