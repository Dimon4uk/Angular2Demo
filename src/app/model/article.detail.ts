import {Article} from "./article";

export class  ArticleDetail extends  Article{


  constructor(
    public name: string,
    public description: string,
    public createdDate: Date,
    public createdBy: number,
    public imagePath:string

  ) {}
}
