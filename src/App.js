import './App.css';

import Playlist from './frag/Playlist';
import Auth from './frag/Auth';
import Counter from './frag/Counter';

function App() {
  return (<>
    <header>
      <h1>Playlist</h1>
    </header>
    <main>
      {true && <Counter />}
      {false && <Auth />}
      {false && <Playlist />}
    </main>
  </>
  );
}

export default App;
