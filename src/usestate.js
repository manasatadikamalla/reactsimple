import React, { useState, useEffect } from 'react';
import {Con} from './context';

const useDocumentTitle = title => {  
  useEffect(() => {  
    document.title = title;  
  }, [title])  
}  

export default function Example()
{
	const [count, setCount] = useState(1);
	  useDocumentTitle(`You clicked ${count} times`);  
  

		return (
			<div>
			<h1>React Hooks useState</h1>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>increase</button>
			<button onClick={() => setCount(count - 1)}>decrease</button>
			<Con/>
			</div>
		);
}