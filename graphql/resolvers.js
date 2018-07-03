const whyj = {
  name: 'whyj',
  age: 18,
  gender: 'female'
};

const resolvers = {
  Query: {
    person: () => whyj
  }
};

export default resolvers;
