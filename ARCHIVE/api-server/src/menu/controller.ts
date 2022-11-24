import express from "express";
import { Route, Get, Controller, Request } from "tsoa";

@Route("")
export class MenusController extends Controller {
  @Get()
  public async getMenu(@Request() request: express.Request): Promise<null> {
    const response = (<any>request).res as express.Response;
    this.setStatus(200);
    response.contentType("text/html");

    const pageBody =
      "<body>" +
      "Calls:<br/>" +
      '<a href="/getArticles">/getArticles</a><br/>' +
      '<a href="/createArticle?url=www.google.com&title=Tittok%20is%20Bad">/createArticle?url=www.google.com&title=Tittok is Bad</a><br/>' +
      '<a href="/deleteArticle?id=3">/deleteArticle?id=3</a><br/>' +
      "</body>";

    response.send(pageBody).end();
    return null;
  }
}
