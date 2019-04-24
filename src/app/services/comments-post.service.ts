import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../models/Post';
import {Comments} from '../models/Comments';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class CommentsPostService {

  constructor(private http: HttpClient) {
  }

  getCommentsByPost(postId: number) {
    const url = 'https://whatthethek-server.herokuapp.com/comments/post/' + postId;
    return this.http.get(url);
  }

  createComment(comment: Comments) {
    const token = localStorage.getItem('access_token');
    console.log(JSON.stringify(comment));
    this.http.post('https://whatthethek-server.herokuapp.com/comment/create/' + localStorage.getItem('id_token'), JSON.stringify(comment),
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)})
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('error occurred creating comment');
        });
  }

  // deleteComment(comment: Comments) {
  //   this.http.delete('https://whatthethek-server.herokuapp.com/comment/delete/' + comment.commentId, httpOptions)
  //     .subscribe(data => {
  //         console.log(data);
  //       },
  //       err => {
  //         console.log('Error occurred deleting the comment');
  //       });
  // }
  //
  // updateComment(comment: Comments) {
  //   this.http.put('https://whatthethek-server.herokuapp.com/comment/update/' + comment.commentId, JSON.stringify(comment), httpOptions)
  //     .subscribe(data => {
  //         console.log(data);
  //       },
  //       err => {
  //         console.log('Error occurred updating the comment');
  //       });
  //
  // }
}
