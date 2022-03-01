const observadas = {
  workers: [[]],
};

const workers_observadas = [
  {
    leader: {
      name: 'Juan',
      lastname: 'Perez',
      email: 'JPEREZ@onp.gob.pe',
    },
    employees: [
      {
        name: 'Ana',
        lastname: 'Sanchez',
        email: 'ASANCHEZ@onp.gob.pe',
      },
      {
        name: 'Pedro',
        lastname: 'Correa',
        email: 'PCORREA@onp.gob.pe',
      },
    ],
  },
];

workers_observadas.forEach((worker) => console.log(worker));
