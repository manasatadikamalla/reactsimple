import React from 'react';
import { Link } from "react-router-dom";

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function Products() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
      <div>
    <ul>{listItems}</ul>
     <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
    </div>
  );
}
