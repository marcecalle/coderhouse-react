import './App.css';
import { useState } from 'react';
import CalculadorComponente from './components/CalculadorComponenete';
import PadreComponente from './components/PadreComponente';

function App() {
  const [numero, setNumero] = useState(0);
  return (
    <>
      <h1>Custom hooks</h1>
      <CalculadorComponente />
      <h1>Children</h1>
      <PadreComponente>
        <p>{numero}</p>
      </PadreComponente>
      <PadreComponente>
        <button>Click</button>
      </PadreComponente>
    </>
  );
}

export default App;