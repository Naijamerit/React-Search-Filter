import React from 'react';

const cardComponent = (key, title, desc) => {
  return (
    <div key={key}>
      <div className="cardTitle">
        <h3>{title}</h3>
      </div>
      <div className="cardDescription">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default cardComponent;
