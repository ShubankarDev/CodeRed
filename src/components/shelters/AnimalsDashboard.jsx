import { useEffect, useState } from "react";
import axios from "axios";

export default function AnimalsDashboard() {
  const [animals, setAnimals] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    description: "",
  });

  // Fetch animal data on load
  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/animals");
      setAnimals(res.data.animals || []);
    } catch (err) {
      console.error("Failed to fetch animals:", err);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddAnimal = async () => {
    try {
      await axios.post("http://localhost:5000/api/animals", formData);
      setFormData({ name: "", age: "", breed: "", description: "" });
      setShowAddDialog(false);
      fetchAnimals(); // Refresh list
    } catch (err) {
      console.error("Error adding animal:", err);
    }
  };

  return (
    <div className="bg-[#fdf9f3] min-h-screen text-gray-900 font-['Inter']">
      <header className="flex justify-between items-center border-b border-gray-200 bg-white px-6 py-4">
        <h1 className="text-2xl font-bold">Animals Dashboard</h1>
        <button
          className="bg-[#ff6f61] text-white px-4 py-2 rounded hover:bg-[#ff5a4d]"
          onClick={() => setShowAddDialog(true)}
        >
          + Add Animal
        </button>
      </header>

      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals.length === 0 ? (
          <p className="col-span-full text-center">No animals found.</p>
        ) : (
          animals.map((animal, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold">{animal.name}</h2>
              <p className="text-sm text-gray-600">Age: {animal.age}</p>
              <p className="text-sm text-gray-600">Breed: {animal.breed}</p>
              <p className="mt-2">{animal.description}</p>
            </div>
          ))
        )}
      </main>

      {/* Add Animal Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">Add New Animal</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="breed"
                placeholder="Breed"
                value={formData.breed}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              ></textarea>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowAddDialog(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#ff6f61] text-white px-4 py-2 rounded hover:bg-[#ff5a4d]"
                onClick={handleAddAnimal}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
