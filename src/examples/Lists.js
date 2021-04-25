const Circle = ({ color, children }) => (
  <div
    style={{
      width: 175,
      height: 175,
      border: '1px solid transparent',
      backgroundColor: color,
      borderRadius: '50%',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
    }}
  >
    {children}
  </div>
);

function App() {
  const menuItems = ['Przycisk 1', 'Przycisk 2', 'Przycisk 3', 'Przycisk 4', 'Przycisk 5', 'Przycisk 6', 'Przycisk 7'];

  const colors = [
    {
      title: 'Czerwony',
      color: 'tomato',
    },
    {
      title: 'Niebieski',
      color: 'dodgerblue',
    },
    {
      title: 'Pomarańczowy',
      color: 'orange',
    },
    {
      title: 'Fioletowy',
      color: 'purple',
    },
    {
      title: 'Morski',
      color: 'teal',
    },
    {
      title: 'Srebrny',
      color: 'silver',
    },
    {
      title: 'Kasztanowy',
      color: 'maroon',
    },
  ];

  return (
    <section>
      <nav>
        <ul style={styles.menu}>
          {menuItems.map((menuItem) => (
            <li style={styles.menuItem} key={menuItem}>
              {menuItem}
            </li>
          ))}
        </ul>
      </nav>
      <section style={styles.colors}>
        {colors.map(({ title, color }) => (
          <Circle key={title} color={color}>
            {title}
          </Circle>
        ))}
      </section>
    </section>
  );
}

const styles = {
  menu: {
    display: 'flex',
    listStyleType: 'none',
    flexWrap: 'wrap',
  },
  menuItem: {
    padding: 10,
  },
  colors: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default App;
