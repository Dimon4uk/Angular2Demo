import {Component, OnInit, Input} from '@angular/core';

import { Article } from "../../../model/article";

@Component({

  selector: 'app-article-item',
  templateUrl: './article-item.component.html'

})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;
  articleId: number;
  constructor() { }

  ngOnInit() {
  }

}
