import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store form input values
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });

  // State to manage submitted data for display
  const [submittedData, setSubmittedData] = useState(null);

  // Handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedData(formData); // Set submitted data for display
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter your city"
          />
        </div>
        <div>
          <label>Province:</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
            placeholder="Enter your province"
          />
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            placeholder="Enter your postal code"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
