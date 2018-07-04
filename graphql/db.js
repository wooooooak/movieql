export const people = [
  {
    id: '0',
    name: 'Dale',
    age: 18,
    gender: 'female'
  },
  {
    id: '1',
    name: 'Jun',
    age: 15,
    gender: 'male'
  },
  {
    id: '2',
    name: 'Sun',
    age: 19,
    gender: 'female'
  }
];

export const getById = id => {
  console.log(String(id));
  const filteredPeople = people.filter(person => person.id === String(id));
  console.log(filteredPeople[0]);
  return filteredPeople[0];
};
