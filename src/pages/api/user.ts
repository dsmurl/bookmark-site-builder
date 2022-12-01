import { NextApiRequest, NextApiResponse } from "next";

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe", bio: "He's a normal guy." });
};

export default userHandler;
