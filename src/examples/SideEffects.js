import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ol>
      {data.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ol>
  );
}

export default App;
