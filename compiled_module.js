'use strict';

// モジュール
// ES2015時点ではimport/export命令を動作できるブラウザは存在しない
// Babel + Browserify(babelify)利用できるようになる

export class User {
  constructor(userId, userName) {
    this.userId = userId;
    this.userName = userName;
  }
  get userId() {
    return this.userId;
  }
  set userId(userId) {
    this.userId = userId;
  }
  get userName() {
    return this.userName;
  }
  set userName(userName) {
    this.userName = userName;
  }
}
console.log('Hello, Babel');
