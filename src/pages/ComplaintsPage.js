import React, { useState } from 'react';
import './ComplaintsPage.css'; // Add some styling if needed

const ComplaintsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle complaint submission logic here
    console.log('Complaint submitted:', formData);
    alert('Your complaint has been submitted successfully!');

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="complaints-container">
      <h2>Submit Your Complaint</h2>
      <form onSubmit={handleSubmit} className="complaints-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </label>
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintsPage;
