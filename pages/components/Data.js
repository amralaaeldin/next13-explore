import { useEffect } from 'react';
import { useState } from 'react';

export default function Data() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setData(json)
      })
  }, [data.length])

  return (
    <div>
      {data.length && (data.map(element => (
        <p key={element.id}>{element.title}</p>
      )))}
    </div>
  );
}