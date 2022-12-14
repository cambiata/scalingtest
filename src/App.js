import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { numberIterator } from './tools/NumberTools';

function App() {
  return (
    <PagesProfiling />
  );
}

export default App;

const PagesProfiling = () => {

  const [pageType, setPageType] = useState('svg');
  const [size, setSize] = useState(50);
  const factor = useRef(100);

  const pages = numberIterator(0, 5).map(idx => {
    const path = pageType === 'svg' ? `/dev-assets/profiling/africa0${idx}.svg` : `/dev-assets/profiling/alleluia0${idx}.png`;
    return <div style={{ width: size + 'px', aspectRatio: size * 1.41 + 'px', border: '1px solid purple', background: 'white' }}>
      <img src={path} style={{ width: '100%', height: '100%' }} />
    </div>;
  })

  return <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
    <header style={{ display: 'flex', gap: '.5rem', padding: '.5rem' }}>
      <input type="range" min="50" max="800" value={size} onChange={e => setSize(e.target.value)} />
      <button style={{ background: pageType === 'svg' ? 'dodgerblue' : '#2f3740' }} onClick={e => setPageType('svg')}>SVG</button><button style={{ background: pageType === 'png' ? 'dodgerblue' : '#2f3740' }} onClick={e => setPageType('png')}>PNG</button>
    </header>
    <div className="PlayerComponent GraphicsElement" style={{ display: 'flex', flexDirection: 'row', gap: '.5rem', flexWrap: 'wrap', padding: '.5rem', overflow: 'auto' }}>
      {pages}
    </div>
  </div >
}

