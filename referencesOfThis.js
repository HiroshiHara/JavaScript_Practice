// thisの参照先テスト
var thisValue = 'this is this. is';

let testClass = function(thisValue) {
  // 1.コンストラクタ...　生成されるインスタンス自身
  this.thisValue = thisValue;
  this.getThisValue = function() {
    return this.thisValue;
  }
  Object.seal(this);
}

// 2.トップレベル(関数の外)... グローバルオブジェクト
console.log(this.thisValue); // this is grobalValue

// 3.関数の中... グローバルオブジェクト
// ただしStrictモードではエラーとなる
function showThisValue() {
  return this.thisValue;
}
console.log(showThisValue()); // this is grobalValue/Strictモードではerror

// 4.メソッド( == インスタンスのメンバ関数)... 呼び出し元のオブジェクト
var tC1 = new testClass('this is Object\'s property');
console.log(tC1.getThisValue()); // this is Object's property
