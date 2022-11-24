import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, prisma } from "../../util/prisma-connection";

const getArticlesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const articles = await prisma.article.findMany();

  res.status(200).json(articles);
};

export default getArticlesHandler;
