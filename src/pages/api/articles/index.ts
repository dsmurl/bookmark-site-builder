import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, prisma } from "../../../util/prisma-connection";

const articlesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const body = req.body;
      const currentDate = new Date();
      const articleData: Prisma.Prisma.ArticleCreateInput = {
        title: body.title,
        url: body.url,
        createDate: currentDate,
        lastUpdate: currentDate,
      };

      const newArticle = await prisma.article.create({ data: articleData });

      res
        .status(200)
        .json({ message: "Created new article", data: newArticle });
    } catch (e) {
      console.log("   e: ", e);
      res.status(500).json({ message: e });
    }
  } else {
    const articles = await prisma.article.findMany();
    res.status(200).json(articles);
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "250kb",
    },
  },
};

export default articlesHandler;
