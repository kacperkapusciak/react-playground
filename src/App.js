import { useState } from 'react';

import Scaffold from './layout/Scaffold';
import Appbar from './layout/Appbar';
import Sidebar from './layout/Sidebar';

import JSX from './examples/JSX';
import Components from './examples/Components';
import ConditionalRendering from './examples/ConditionalRendering';
import Lists from './examples/Lists';
import State from './examples/State';
import Context from './examples/Context';
import SideEffects from './examples/SideEffects';

// type: 'rendering' | 'state_management' | 'life_cycle'
const examples = {
  jsx: {
    title: 'JSX',
    body: <JSX />,
  },
  components: {
    title: 'Komponenty',
    body: <Components />,
  },
  state: {
    title: 'Stan',
    body: <State />,
  },
  conditional_rendering: {
    title: 'Renderowanie warunkowe',
    body: <ConditionalRendering />,
  },
  lists: {
    title: 'Listy i klucze',
    body: <Lists />,
  },
  context: {
    title: 'Kontekst',
    body: <Context />,
  },
  life_cycle: {
    title: 'Efekty uboczne',
    body: <SideEffects />,
  },
};

function App() {
  const [currentExample, setCurrentExample] = useState('jsx');
  return (
    <Scaffold
      appbar={<Appbar title={examples[currentExample].title} />}
      sidebar={<Sidebar examples={examples} currentExample={currentExample} setCurrentExample={setCurrentExample} />}
      main={examples[currentExample].body}
    />
  );
}

export default App;
