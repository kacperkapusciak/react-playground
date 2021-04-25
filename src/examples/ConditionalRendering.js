import { useState } from 'react';

const Circle = () => (
  <div
    style={{
      width: 100,
      height: 100,
      border: '1px solid transparent',
      backgroundColor: 'red',
      borderRadius: '50%',
    }}
  />
);

const Square = () => (
  <div
    style={{
      width: 100,
      height: 100,
      border: '1px solid transparent',
      backgroundColor: 'green',
    }}
  />
);

function App() {
  const [shape, setShape] = useState('circle');

  const handleChangeShape = () => {
    setShape((prevShape) => (prevShape === 'circle' ? 'square' : 'circle'));
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleChangeShape}>
        Zmień figurę
      </button>
      {/* renderowanie warunkowe */}
      {shape === 'circle' ? <Circle /> : <Square />}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  counter: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  button: {
    height: 40,
    width: 200,
    border: '1px solid transparent',
    borderRadius: 5,
    margin: 8,
    backgroundColor: 'dodgerblue',
    color: 'white',
  },
};

export default App;
