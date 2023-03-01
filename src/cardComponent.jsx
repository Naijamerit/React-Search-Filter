import React from 'react';

const cardComponent = (key, title, desc) => {
  return (
    <div key={key}>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default cardComponent;
