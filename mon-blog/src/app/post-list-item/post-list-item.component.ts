import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() lovePost : number;
  @Input() datePost : Date;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.lovePost >= 1) {
      return 'green';
    } else if (this.lovePost <= -1) {
      return 'red';
    }
  }

  loveIt() {
    console.log('love')
    this.lovePost ++;
    console.log(this.lovePost)
  }

  dontLove() {
    console.log('dont love')
    this.lovePost --;
    console.log(this.lovePost)
  }

}
