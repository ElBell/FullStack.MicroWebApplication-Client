import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {ɵResourceLoaderImpl} from '@angular/platform-browser-dynamic';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  constructor(private http: HttpClient) {
  }

  signUp() {
    const token = localStorage.getItem('access_token');
    return this.http.post('server/users/sign-up', localStorage.getItem('id_token'),
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)})
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('error occurred');
        });
  }

  getUsers() {
    const token = localStorage.getItem('access_token');
    return this.http.get('server/users',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))});
  }

  getUserById(userId: string) {
    return this.http.get('server/users/' + userId);
  }

  getPosts() {
    return this.http.get('server/users/posts');
  }

  getPostsByUser(userId: string) {
    const url = 'server/users/posts/' + userId;
    return this.http.get(url);
  }

  getPostById(postId: string) {
    const url = 'server/post/' + postId;
    return this.http.get(url);
  }

  // savPost(post: any): Observable<any> {
  //   let result: Observable<Object>;
  //   if (post['href']) {
  //     result = this.createPost(post);
  //   } else {
  //     result = this.updatePost(post);
  //   }
  //   return result;
  // }

  createPost(post: Post) {
    console.log(JSON.stringify(post));
    return this.http.post('/server/users/createPost/' + localStorage.getItem('id_token'),
      JSON.stringify(post), httpOptions)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('error occurred creating post');
        });
  }

  deletePost(post: Post) {
    this.http.delete('/users/deletePost/' + post.postID, {
      params: {
        postTitle: post.postTitle, postSummary: post.postSummary,
        postContent: post.postContent, postComments: post.comments, postTags: post.tagsSet
      }
    })
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('Error occurred deleting the post');
        });
  }

  updatePost(post: Post) {
    this.http.put('/server/users/updatePost/' + post.postID, JSON.stringify(post), httpOptions)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('Error occurred updating the post');
        });
  }


}
