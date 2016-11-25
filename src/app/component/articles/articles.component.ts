import { Component, OnInit } from '@angular/core';

import { ArticleListComponent } from "./list/article-list.component";
import { ArticleDetailComponent} from "./detail/article-detail.component";
import {Article} from "../../model/article";
import {Response} from "@angular/http";
import {DataService} from "../../service/data.service";

@Component({

  selector: 'app-articles',
  templateUrl: './articles.component.html',
  viewProviders: [ArticleListComponent, ArticleDetailComponent ],
  providers:[DataService]
})
export class ArticlesComponent implements OnInit {
  title = "Articles";
   private  articles :Article[] = [];
  selectedArticle: Article;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    // this.dataService.getArticles()
    //   .subscribe(
    //     (data:Response) => Array.prototype.push.apply(this.articles, data.json())
    //   );
  }

}
