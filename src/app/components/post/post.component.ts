import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogApiService} from '../../services/blog.api.service';
import {Post} from '../../models/Post';
import {User} from "../../models/User";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post = new Post(null, null, null, null, null, null,
    null, new User(null, null), null);
  public tags;
  public imageUrl = '../../assets/images/defaultBackground.jpeg';

  constructor(public postId: ActivatedRoute, public blogApiService: BlogApiService) { }

  ngOnInit() {
    this.getPost(this.postId);
    this.getTags(this.postId);
  }


  getTags(postId) {
    this.blogApiService.getPostTags(postId.params.value.id).subscribe(
      data => { this.tags = data; console.log(data)},
      err => console.log(err),
    );
  }

  getPost(postId) {
    this.blogApiService.getPostById(postId.params.value.id).subscribe(
      (data: Post) => { this.post = data; this.setImage(data.myFile); },
      err => console.log(err),
    );
  }

  public setImage(myFile: string) {
    if (myFile !== null) {
      this.imageUrl = 'https://whatthethek-server.herokuapp.com/downloadFile/' + myFile;
    }
  }
}
