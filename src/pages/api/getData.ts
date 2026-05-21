import type { NextApiRequest, NextApiResponse } from "next";

type Person = {
  name: string;
  age: number;
};

type Data = {
  people: Person[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = {
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

  res.status(200).json(data);
}
