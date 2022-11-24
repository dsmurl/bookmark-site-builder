// src/users/usersService.ts
import { Article } from "../types/Article";
import { prisma } from "../util/prisma-connection";

// A post request should not contain an id.
export type ArticleCreationParams = Omit<Article, "id">;

export class ArticleService {
  // public get(id: number): Car {

  // }

  public async create(
    carCreationParams: ArticleCreationParams
  ): Promise<Article> {
    const response = await prisma.article.create({
      data: carCreationParams,
    });

    const newArticle = {
      ...response,
      createDate: response.createDate.toDateString(),
      lastUpdate: response.lastUpdate.toDateString(),
    };

    return newArticle;
  }
}
