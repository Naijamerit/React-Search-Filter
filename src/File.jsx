import React from 'react';
import { useState } from 'react';
import { foods } from './dummyData';
import cardComp from './cardComponent';
import './App.css';

function File() {
  const [query, setQuery] = useState('');

  return (
    <frameElement>
      <input
        type="text"
        class="form-control"
        placeholder="Item Name"
        aria-label="Item Name"
        aria-describedby="basic-addon1"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div class="flex-container">
        <ul>
          {foods
            .filter((item) => item.name.toLocaleLowerCase().includes(query))
            .map((item) => cardComp(item.id, item.name, item.description))}
        </ul>
      </div>
    </frameElement>
  );
}

export default File;
