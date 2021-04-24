function Scaffold({ appbar, sidebar, main }) {
  return (
    <section style={styles.layout}>
      <div style={styles.appbar}>{appbar}</div>
      <nav style={styles.sidebar}>{sidebar}</nav>
      <main style={styles.main}>{main}</main>
    </section>
  );
}

const styles = {
  layout: {
    display: 'grid',
    gridTemplateAreas: `"appbar appbar"
                        "sidebar main"`,
    gridTemplateColumns: '300px 1fr',
  },
  appbar: {
    gridArea: 'appbar',
  },
  sidebar: {
    gridArea: 'sidebar',
  },
  main: {
    gridArea: 'main',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 70px)',
  },
};

export default Scaffold;
