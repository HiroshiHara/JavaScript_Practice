'use strict';

function displayBorderLog() {
  console.log('-----------------');
}
// コンストラクタの問題
// コンストラクタも通常の関数と同様に呼び出せてしまうので、予期せぬバグを生みかねない
// 以下の仕掛けを施して防ぐ
var User = function(firstName, lastName) {
  // new演算子を使わずにこの関数を呼び出したとき、戻り値として改めてこのコンストラクタを呼びだす
  if (!(this instanceof User)) {
    return new User(firstName, lastName);
  }
  this.firstName = firstName;
  this.lastName = lastName;
}

var user1 = new User('Chris', 'Coleman');
console.log(user1.firstName);
console.log(user1.lastName);

var user2 = User('Dave', 'Weckle');
console.log(user2.firstName);
console.log(user2.lastName);
displayBorderLog();

// コンストラクタにインスタンス共通のメソッドを定義してしまうと、
// インスタンス生成のたびに同じ関数オブジェクトに対してメモリを消費してしまうので無駄
// 共通のメソッドはprototypeプロパティとして宣言すると、そのプロトタイプを元に生成されたインスタンスは
// メンバーとしてメソッドを引き継ぐ
var Item = function(price, amount) {
  if (!(this instanceof Item)) {
    return new Item(price, amount);
  }
  this.price = price;
  this.amount = amount;
}

Item.prototype.setPrice = function(price) {
  this.price = price;
}

Item.prototype.getPrice = function() {
  return this.price;
}

var item1 = new Item(100, 3);
var item2 = new Item(200, 7);
console.log(item1.getPrice());
console.log(item2.getPrice());
item1.setPrice(300);
console.log(item1.getPrice());
console.log(item2.getPrice());
displayBorderLog();

// インスタンスはプロトタイプへの暗黙的な参照を持つので、
// newでインスタンスを生成した後でプロトタイプのメンバを更新しても
// インスタンス側はリアルタイムで追跡する
Item.prototype.getAmount = function() {
  return this.amount;
}
console.log(item1.getAmount());
console.log(item2.getAmount());
displayBorderLog();

// インスタンス自身に対象のメンバが存在しないときだけ、プロトタイプの参照を確認する
// ただし、インスタンスがプロトタイプのメンバを変更した場合、そのインスタンス自身が新しいメンバを獲得する
// つまり、プロトタイプのメンバへの書き換えは他のインスタンスへ影響しない
// ただまぁ、インスタンスごとに値が異なる予定のプロパティはプロトタイプで宣言する必要はない
var Supplyer = function(companyName, tel, mailaddr) {
  if (!(this instanceof Supplyer)) {
    return new Supplyer(companyName, tel, mailaddr);
  }
  this.companyName = companyName;
  this.tel = tel;
  this.mailaddr = mailaddr;
}
Supplyer.prototype.contact = 'web';
Supplyer.prototype.howToContact = function() {
  return this.contact;
}
Supplyer.prototype.changeContact = function(howToContact) {
  this.contact = howToContact;
}
var supplyer1 = new Supplyer('A商社', '990-9999-9999', 'test@mail.jp');
var supplyer2 = new Supplyer('B商事', '449-2342-4534', 'sample@mail.com');
console.log(supplyer1.howToContact());
console.log(supplyer2.howToContact());
supplyer1.changeContact('tel');
console.log(supplyer1.howToContact());
console.log(supplyer2.howToContact());
displayBorderLog();

// インスタンスへプロパティの削除を行っても、プロトタイプに定義されているメンバの場合
// プロトタイプへの影響はない
delete supplyer1.contact;
delete supplyer2.contact;
console.log(supplyer1.howToContact());
console.log(supplyer2.howToContact());
displayBorderLog();

// プロトタイプに定義するメンバが多いときはオブジェクトリテラルを利用する
var UserAccount = function(usrId, password) {
  this.usrId = usrId;
  this.password = password;
}

// staticプロパティ/staticメソッドは
// クラス名.プロパティ名/メソッド名で定義する
UserAccount.version = 1.0;
UserAccount.incVersion = function() {
  UserAccount.version += 0.1;
}

UserAccount.prototype = {
  perm: true,
  display: function() {
    console.log('ユーザID:' + this.usrId);
    console.log('権限:' + this.perm);
  },
  setUsrId: function(usrId) {
    this.usrId = usrId;
  },
  setPassword: function(password) {
    this.password = password;
  },
  setPerm: function(perm) {
    this.perm = perm;
  },
  getUsrId: function() {
    return this.usrId;
  },
  getPassword: function() {
    return this.password;
  },
  getPerm: function() {
    return this.perm;
  }
}
var adminUser = new UserAccount('0001', 'admin');
var ordinalUser = new UserAccount('0002', '0002');
ordinalUser.setPerm(false);
adminUser.display();
ordinalUser.display();
console.log(UserAccount.version);
UserAccount.incVersion();
console.log(UserAccount.version);
displayBorderLog();
