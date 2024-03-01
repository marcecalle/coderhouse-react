import { useEffect, useRef } from 'react';

export default function SearchComp() {
  const refCampo = useRef(null);

  useEffect(() => {
    console.log('Efecto en accion 💪');
    refCampo.current.focus();
  }, []);

  return (
    <>
      <section>
        <input placeholder="Que buscas ?" ref={refCampo} />
        <button>🔍</button>
      </section>
    </>
  );
}