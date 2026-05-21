const getData = async () => {
  const res = {
    people: [
      {
        name: "John",
        age: 30,
      },
      {
        name: "Jane",
        age: 25,
      },
      {
        name: "Bob",
        age: 35,
      },
      {
        name: "Alice",
        age: 40,
      },
    ],
  };
  return JSON.stringify(res);
};

export default getData;
