// 3. ShelterList.jsx
import React from 'react';
import ShelterCard from './ShelterCard';

function ShelterList({ shelters }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {shelters.map(shelter => (
        <ShelterCard key={shelter.id} {...shelter} />
      ))}
    </div>
  );
}

export default ShelterList;