// 2. ShelterForm.jsx
import React, { useState } from 'react';

function ShelterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '', location: '', description: '', goal: '', image: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    setFormData({ name: '', location: '', description: '', goal: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Apply for Funding</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Shelter Name" className="w-full p-2 mb-2 border rounded" required />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full p-2 mb-2 border rounded" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 mb-2 border rounded" required />
      <input name="goal" type="number" value={formData.goal} onChange={handleChange} placeholder="Funding Goal" className="w-full p-2 mb-2 border rounded" required />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 mb-4 border rounded" required />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:brightness-110">Submit</button>
    </form>
  );
}

export default ShelterForm;
