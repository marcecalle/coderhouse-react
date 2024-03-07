const students = [
  { name: 'Paul', age: 21, country: 'France' },
  { name: 'Mary', age: 23, country: 'Spain' },
  { name: 'Adam', age: 25, country: 'Germany' },
  { name: 'Sam', age: 19, country: 'Brazil' },
];

const [a, ...resto] = students;
console.log(a);
console.log(resto);

//prop dinamicas
const mapeado = students.map((student) => {
  return {
    name: student.name.toUpperCase(),
    codeCountry: student.country.substr(0, 3),
    ['stud' + student.age]: student.name + student.age,
  };
});

console.table(mapeado);

//alias
const obj1 = {
  deporte: 'tenis',
};

const { deporte: actividad } = obj1;
console.log(actividad);

//asignacion en desestructuracion
const listaEdades = [48, 72];
const [uno, dos, tres = 0, cuatro] = listaEdades;
console.log(uno, dos, tres, cuatro);

