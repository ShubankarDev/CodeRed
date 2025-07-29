import React, { useState } from 'react';
// import { ShelterForm, ShelterList } from '../components/Funding';
import ShelterForm from "./ShelterForm";
import ShelterList from "./ShelterList";
import ShelterCard from "./ShelterCard";

const FundingPage = () => {
  const [shelters, setShelters] = useState([]);

  const handleAddShelter = (newShelter) => {
    const fullShelter = {
      ...newShelter,
      id: Date.now(),
      raised: 0,
      donors: 0,
    };
    setShelters([fullShelter, ...shelters]);
  };

  return (
    <div className="p-6">
      <ShelterForm onSubmit={handleAddShelter} />
      <ShelterList shelters={shelters} />
    </div>
  );
};

export default FundingPage;
