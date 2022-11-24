import { NextApiRequest, NextApiResponse } from "next";

const menuHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "text/html");

  const pageBody =
    "<body>" +
    "Calls:<br/>" +
    '<a href="/getArticles">/getArticles</a><br/>' +
    '<a href="/createArticle?url=www.google.com&title=Tittok%20is%20Bad">/createArticle?url=www.google.com&title=Tittok is Bad</a><br/>' +
    '<a href="/deleteArticle?id=3">/deleteArticle?id=3</a><br/>' +
    "</body>";

  res.status(200).send(pageBody);
};

export default menuHandler;
