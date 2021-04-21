function Sidebar({ examples, currentExample, setCurrentExample }) {
  return (
    <section style={styles.container}>
      <h4>Przykłady</h4>
      {Object.entries(examples).map(([key, example]) => {
        return (
          <span
            style={currentExample === key ? { ...styles.item, ...styles.current } : styles.item}
            key={key}
            onClick={() => setCurrentExample(key)}
          >
            {example.title}
          </span>
        );
      })}
    </section>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 16,
    height: 'calc(100vh - 70px)',
    borderRight: '1px solid #ccc',
  },
  item: {
    padding: '16px 0',
    cursor: 'pointer',
  },
  current: {
    borderRight: '5px solid dodgerblue',
    color: 'dodgerblue',
  },
};

export default Sidebar;
