'use strict';
let Item = function() {
  // プライベートプロパティの定義
  // thisではなくvarで宣言、かつコンストラクタで宣言する
  var _product;
  var _price;
  var _amount;
  const TAX = 1.08;
  // プライベートメソッドの定義
  var _checkProductName = function(product) {
    return (typeof product === 'string' && product);
  }
  var _checkPriceAndAmount = function(priceOrAmount) {
    return (typeof priceOrAmount === 'number' && priceOrAmount > 0);
  }

  // プライベートメンバへのアクセサメソッド(特権メソッド)もクロージャを利用する　= インスタンスが存在する限りメンバ変数は保存され続ける
  // クロージャを利用する都合上、コンストラクタ内でしかアクセサメソッドを定義できない
  // なお、JavaScriptではプライベートメンバへはアクセサメソッド経由でしかアクセスできない
  this.setProduct = function(product) {
    if (_checkProductName(product)) {
      _product = product;
    }
  }
  this.setPrice = function(price) {
    if (_checkPriceAndAmount(price)) {
      _price = price;
    }
  }
  this.setAmount = function(amount) {
    if (_checkPriceAndAmount(amount)) {
      _amount = amount;
    }
  }
  this.getProduct = function() {
    return _product;
  }
  this.getPrice = function() {
    return _price;
  }
  this.getAmount = function() {
    return _amount;
  }
  this.incAmount = function(amount) {
    _amount += amount;
  }
  this.decAmount = function(amount) {
    if (_amount - amount < 0) {
      throw new Error('在庫数がマイナスになってしまいます。' + '\r\n' + '引数を訂正して下さい');
    }
    _amount -= amount;
  }
}

// プライベートメンバにアクセスしない = パブリックメソッド
Item.prototype.displayItemData = function() {
  console.log('製品名:' + this.getProduct());
  console.log('価格　:' + this.getPrice());
  console.log('在庫数:' + this.getAmount());
}
let displayBorderLog = function() {
  console.log('----------------------------');
}

// インスタンス生成
// プライベートメンバに直接アクセスしてもエラーにはならない
var eraser = new Item();
eraser._product = 'eraser';
eraser._price = 100;
eraser._amount = 20;
eraser.displayItemData(); // undefined
displayBorderLog();

eraser.setProduct('eraser');
eraser.setPrice(100);
eraser.setAmount(20);
eraser.incAmount(5);
eraser.decAmount(10);
eraser.displayItemData();
displayBorderLog();
