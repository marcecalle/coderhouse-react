import { useCalculos } from '../hooks/useCalculos';
import { useState } from 'react';

export default function CalculadorComponente() {
const [inputValue, setInputValue] = useState(0);
const { iva, desc, calcularIva, calcularDesc } = useCalculos(inputValue);

const handleChange = (event) => {
   setInputValue(event.target.value);
};

const handleClickIva = () => {
   calcularIva();
};

const handleClickDesc = () => {
   calcularDesc();
};

return (
   <>
   <section>
      <h3>Calculador de impuestos y descuentos</h3>
      <label htmlFor="precio">
         Precio en $:
         <input
         type="number"
         name="precio"
         onChange={handleChange}
         value={inputValue}
         />
      </label>
   </section>
   <section>
      <article>
         <p>Valor con iva: {iva}</p>
         <button onClick={handleClickIva}>con IVA 21%</button>
      </article>
      <article>
         <p>Valor con descuento: {desc}</p>
         <button onClick={handleClickDesc}>con descuento 10%</button>
      </article>
   </section>
   </>
);
}