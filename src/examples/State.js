import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <section style={styles.container}>
      <p style={styles.counter}>{counter}</p>
      <div>
        <button style={styles.button} onClick={handleDecrement}>
          -
        </button>
        <button style={styles.button} onClick={handleIncrement}>
          +
        </button>
      </div>
    </section>
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
    height: 50,
    width: 50,
    border: '1px solid transparent',
    borderRadius: '50%',
    margin: 8,
  },
};

export default App;
