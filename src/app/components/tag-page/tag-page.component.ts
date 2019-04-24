import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TagService} from '../../services/tag.service';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.css']
})
export class TagPageComponent implements OnInit {

  public tag = {tagName: ''};
  public posts = [];

  constructor(public tagId: ActivatedRoute, public tagService: TagService) { }

  ngOnInit() {
    this.getTag(this.tagId);
  }

  public getTag(tagId) {
    this.tagService.getTag(tagId.params.value.id).subscribe(
      (data: any) => { this.tag = data; this.posts = data.listOfPosts; }
    );
  }

}
