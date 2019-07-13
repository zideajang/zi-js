export default class UserModel {
  private username: string;
  private author: number[];
  constructor(username: string, author: number[]) {
    this.username = username;
    this.author = author;
  }
}
