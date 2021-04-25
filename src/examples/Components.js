// -----

function Title(props) {
  return <h1>{props.value}</h1>;
}
// Dokładnie to samo ale krótsza składnia
// const Title = ({value}) => <h1>{value}</h1>;

// -----

function Car(props) {
  return (
    <div style={{ ...carStyle, backgroundColor: props.color }}>
      <p>marka: {props.brand}</p>
      <p>model: {props.model}</p>
    </div>
  );
}

const carStyle = {
  margin: 8,
  width: 170,
  color: 'white',
  border: '1px solid transparent',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
};

// -----

function Button(props) {
  const { onClick, children } = props;
  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
}

const buttonStyle = {
  backgroundColor: 'dodgerblue',
  border: 'none',
  height: 50,
  width: 200,
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold',
};

// -----

function App() {
  return (
    <section>
      <Title value="Przykładowy tytuł" />
      <Car brand="Tesla" model="X" color="tomato" />
      <Car brand="Ford" model="Focus" color="dodgerblue" />
      <Car brand="Fiat" model="Tipo" color="purple" />
      <Button onClick={() => alert('Wciśnięto przycisk!')}>Przycisk</Button>
    </section>
  );
}

export default App;
