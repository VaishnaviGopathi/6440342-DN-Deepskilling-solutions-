import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Steeve";
  const school = "DNV Public School";
  const total = 284;
  const goal = 300;

  const percentage = ((total / goal) * 100).toFixed(2);

  return (
    <div className="container">
      <h1 className="heading">Student Details:</h1>
      <p><strong className="label name">Name:</strong> <span className="value name">{name}</span></p>
      <p><strong className="label school">School:</strong> <span className="value school">{school}</span></p>
      <p><strong className="label total">Total:</strong> <span className="value total">{total} Marks</span></p>
      <p><strong className="label score">Score:</strong> <span className="value score">{percentage}%</span></p>
    </div>
  );
}

export default CalculateScore;
