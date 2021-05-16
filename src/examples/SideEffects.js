import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState(window.localStorage.getItem('name') || '');

  useEffect(() => {
    window.localStorage.setItem('name', name);
  });

  const handleChange = (event) => setName(event.target.value);

  return (
    <>
      <form>
        <div>Twoje imię: </div>
        <input value={name} id="name" onChange={handleChange} />
      </form>
      {name ? `Cześć, ${name}` : 'Wpisz swoje imię'}
    </>
  );
}

export default App;
