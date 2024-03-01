import { useState, useRef } from 'react';

export default function RefBasic() {
  const [cont, setCont] = useState(0);
  const clicksRef = useRef(0);

  const estilos = {
    margin: '10px',
    gap: '50px',
    display: 'flex',
    justifyContent: 'center',
  };

  const handleInc = () => {
    setCont(cont + 1);
    clicksRef.current++;
    console.log('Contador de clicks: ' + clicksRef.current);
  };

  const handleDec = () => {
    setCont(cont - 1);
    clicksRef.current++;
    console.log('Contador de clicks: ' + clicksRef.current);
  };

  return (
    <>
      <section style={estilos}>
        <button onClick={handleInc}>Incrementar</button>
        <p>{cont}</p>
        <button onClick={handleDec}>Decrementar</button>
      </section>
    </>
  );
}