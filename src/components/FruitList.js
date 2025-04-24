import React from 'react';

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];

  return (
    <div>
      <p>Rendering {fruits.length} fruits using map():</p>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>🍎 {fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
