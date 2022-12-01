import { NextApiRequest, NextApiResponse } from "next";

const newRouteHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "text/html");

  const pageBody = "This is a new route";

  res.status(200).send(pageBody);
};

export default newRouteHandler;
