import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import {Article} from "../../../model/article";
import {ArticleItemComponent} from "./article-item.component";
import {DataService} from "../../../service/data.service";
import {Response} from "@angular/http";

@Component({

  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  viewProviders: [ArticleItemComponent]
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getArticles()
    //   .subscribe(
    //     (data:Response) => Array.prototype.push.apply(this.articles, data.json())
    //   );
  }

  AddArticle(/*articles: Article[]*/) {
    //this.dataService.AddArticle(articles);

  }

}
