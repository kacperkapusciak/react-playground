import { createContext, useReducer, useContext } from 'react';

export const initialState = {
  left: 0,
  right: 0,
};

export const Counter = createContext({
  state: initialState,
  dispatch: (_) => {},
});

function reducer(state, action) {
  const { left, right } = state;
  switch (action.type) {
    case 'INCREMENT_LEFT':
      return { ...state, left: left + 1 };

    case 'INCREMENT_RIGHT':
      return { ...state, right: right + 1 };

    case 'DECREMENT_LEFT':
      return { ...state, left: left - 1 };

    case 'DECREMENT_RIGHT':
      return { ...state, right: right - 1 };

    case 'RESET':
      return { left: 0, right: 0 };

    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Counter.Provider value={{ state, dispatch }}>{children}</Counter.Provider>;
}

function ScoreKeeper() {
  const { state } = useContext(Counter);

  return (
    <div style={{ ...styles.counter, padding: '35px 0' }}>
      {state.left} : {state.right}
    </div>
  );
}

function NestedComponent({ children }) {
  return <div style={{ ...styles.box, backgroundColor: 'dodgerblue' }}>{children}</div>;
}

function DeeplyNestedComponent({ children }) {
  return <div style={{ ...styles.box, backgroundColor: 'orange' }}>{children}</div>;
}

function VeryDeeplyNestedComponent({ type }) {
  const { state, dispatch } = useContext(Counter);

  return (
    <div style={{ ...styles.box, backgroundColor: 'lightgray' }}>
      {type === 'left' ? (
        <div style={styles.container}>
          <p style={styles.counter}>{state.left}</p>
          <div>
            <button onClick={() => dispatch({ type: 'INCREMENT_LEFT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT_LEFT' })}>-</button>
          </div>
        </div>
      ) : (
        <div style={styles.container}>
          <p style={styles.counter}>{state.right}</p>
          <div>
            <button onClick={() => dispatch({ type: 'INCREMENT_RIGHT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT_RIGHT' })}>-</button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <section style={styles.container}>
        <ScoreKeeper />
        <div style={styles.box}>
          <NestedComponent>
            <DeeplyNestedComponent>
              <VeryDeeplyNestedComponent type="left" />
            </DeeplyNestedComponent>
          </NestedComponent>
          <NestedComponent>
            <DeeplyNestedComponent>
              <VeryDeeplyNestedComponent type="right" />
            </DeeplyNestedComponent>
          </NestedComponent>
        </div>
      </section>
    </CounterProvider>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
  box: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 20,
    backgroundColor: 'tomato',
    minWidth: 200,
    minHeight: 200,
  },
};

export default App;
