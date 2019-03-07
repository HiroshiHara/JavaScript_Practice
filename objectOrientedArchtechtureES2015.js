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
  // メソッド宣言もfunction命令が不要になった
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

// 継承
class AdminUser extends User {
  // オーバーライド
  constructor(userId, userName, password) {
    // superで親クラスのコンストラクタ呼び出し(子クラスでコンストラクタを使用する場合は無いとエラー)
    super(userId, userName, password);
    this.perm = true;
  }
  get getPerm() {
    return this.perm;
  }
}

let adminUser1 = new AdminUser('0002', 'Dave Weckle', 'asdfele');
console.log('adminUser1\'s permmition is ' + adminUser1.getPerm);

let adminUser2 = new User(); // エラーにはならないのはオブジェクト指向言語と同じ
adminUser2.displayUserData(adminUser2);
console.log(adminUser2.getPerm); // undefined
User.displayBorderLog();
