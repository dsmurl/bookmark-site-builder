import {
  Route,
  Example,
  Get,
  Post,
  Path,
  Query,
  Body,
  Controller,
  SuccessResponse,
  Response,
} from "tsoa";
import { Article } from "../types/Article";
import { ValidateErrorJSON } from "../types/ValidateErrorJSON";
import { ArticleService, ArticleCreationParams } from "./service";

@Route("articles")
export class ArticlesController extends Controller {
  // @Example<Article>({
  //   id: 12,
  //   title: "This is a great article",
  //   url: "https://www.thegatewaypundit.com/2022/11/breaking-second-arizona-county-refuses-certify-tainted-2022-midterm-election/",
  //   createDate: "some date",
  //   lastUpdate: "some date",
  // })
  // @Post("{id}")
  // public async getUser(
  //   @Path() id: number,
  //   @Query() name: string
  // ): Promise<Article> {

  //   console.log(  )
  //   return new ArticleService().create({title: });
  // }

  @Post()
  @SuccessResponse("201", "Created") // Custom success response
  @Response<ValidateErrorJSON>(422, "Validation Failed", {
    message: "Validation failed",
    details: {
      requestBody: {
        message: "id is an excess property and therefore not allowed",
        value: "52907745-7672-470e-a803-a2f8feb52944",
      },
    },
  })
  public async createUser(
    @Body() requestBody: ArticleCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new ArticleService().create(requestBody);
    return;
  }
}
