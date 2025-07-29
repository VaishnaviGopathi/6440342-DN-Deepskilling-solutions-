
import React from 'react';
import './CohortDetails.module.css';

function App() {
  const cohorts = [
    { id: 1, name: 'React Basics', status: 'ongoing' },
    { id: 2, name: 'Advanced React', status: 'completed' }
  ];

  return (
    <div>
      {cohorts.map((cohort) => (
        <div key={cohort.id} className="box">
          <h3 style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue' }}>
            {cohort.name}
          </h3>
          <p>Status: {cohort.status}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
