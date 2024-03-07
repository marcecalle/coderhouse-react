import { useEffect, useState } from 'react';

export default function ProductList() {
const [products, setProducts] = useState([]);

useEffect(() => {
   fetch(
   'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=10'
   )
   .then((resp) => resp.json())
   .then((data) => {
      console.log(data.results);
      setProducts(data.results);
   })
   .catch((error) => console.log('Error:  ' + error));
}, []);

return (
   <>
   <h2>Listado de Celulares (10 primeros)</h2>
   <ul>
      {products.map((prod) => (
         <li key={prod.id}>{prod.title}</li>
      ))}
   </ul>
   </>
);
}
