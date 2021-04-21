function Appbar({ title }) {
  return <div style={styles.container}>{title}</div>;
}

const styles = {
  container: {
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    padding: 8,
    backgroundColor: '#fafafa',
    borderBottom: '1px solid #ccc',
  },
};

export default Appbar;
