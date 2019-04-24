import {Comments} from './Comments';
import {User} from "./User";

export class Post {
  constructor(
    public postID: number,
    public postTitle: string,
    public postSummary: string,
    public postContent: string,
    public createdDate: Date,
    public comments: Comments[],
    public tagsSet: any[],
    public creator: User,
    public myFile: string /* property of File type */
  ) {
  }
}
