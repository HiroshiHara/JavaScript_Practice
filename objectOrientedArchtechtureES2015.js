'use strict';

// ES2015で導入されたオブジェクト指向構文
// クラス宣言... class命令
class User {

  // コンストラクタ
  constructor(userId, userName, password) {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
  }
  // プロパティ(getter/setter)の定義
  get getUserId() {
    return this.userId;
  }
  set setUserId(userId) {
    if (typeof userId === 'string' && userId) {
      this.userId = userId;
    }
  }

  get getUserName() {
    return this.userName;
  }
  set setUserName(userName) {
    if (typeof userName === 'string' && userName) {
      this.userName = userName;
    }
  }

  get getPassword() {
    return this.password;
  }
  set setPassword(password) {
    if (typeof password === 'string' && password) {
      this.password = password;
    }
  }

  // インスタンスメソッド
  displayUserData(user) {
    console.log(this.userId);
    console.log(this.userName);
    console.log(this.password);
  }

  // staticメソッド
  static displayBorderLog() {
    console.log('---------------------');
  }

}

// インスタンス生成
let user1 = new User('0001', 'Chris Coleman', 'sadkfje');
user1.displayUserData(user1);
User.displayBorderLog();
console.log(user1); // 変数・メソッドは工夫しないと全てpublic
