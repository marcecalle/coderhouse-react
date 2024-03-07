const students = [
  { name: 'Paul', age: 21, country: 'France' },
  { name: 'Mary', age: 23, country: 'Spain' },
  { name: 'Adam', age: 25, country: 'Germany' },
  { name: 'Sam', age: 19, country: 'Brazil' },
];

//map()
const mapped = students.map((student) => {
  return {
    name: student.name.toUpperCase(),
    codeCountry: student.country.substr(0, 3),
    ['misc' + student.age]: student.name + student.age,
  };
});
console.log(mapped);

//spread

const [a, ...resto] = students;
console.log(a);
console.log(resto);

const obj = { a: 'oso', b: 'tigre' };
const { a: primerProp, b: segundaProp } = obj;
console.log(primerProp);
console.log(segundaProp);

//deep matching - alias del atributo
let { deporte: actividad } = { deporte: 'tenis' };
console.log(actividad);

//asignacion en desestructuracion
//si no hay nada asigna lo que le enviamos o hay undefined en esa posicion
let [uno = 123, dos = 234, tres = 345, cuatro] = [4, 5];

console.log(uno); //4
console.log(dos); //5
console.log(tres); //345
console.log(cuatro); //undefined