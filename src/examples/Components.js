// -----

function Title(props) {
  return <h1>{props.value}</h1>;
}
// Dokładnie to samo ale krótsza składnia
// const Title = ({value}) => <h1>{value}</h1>;

// -----

function Car(props) {
  return (
    <div style={{ color: props.color, border: `1px solid ${props.color}`, padding: 8, margin: 8 }}>
      <h5>marka: {props.brand}</h5>
      <h5>model: {props.model}</h5>
    </div>
  );
}

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
      <Car brand="Tesla" model="X" color="red" />
      <Car brand="Ford" model="Focus" color="blue" />
      <Car brand="Fiat" model="Tipo" color="gray" />
      <Button onClick={() => alert('Wciśnięto przycisk!')}>Przycisk</Button>
    </section>
  );
}

export default App;
