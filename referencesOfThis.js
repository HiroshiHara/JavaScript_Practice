// thisの参照先テスト
var thisValue = 'this is grobalValue';

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

// 5.callメソッド... 引数で指定されたオブジェクトのプロパティ
// 関数オブジェクト.call(関数の中でthisが示すもの, 関数に渡す引数(可変長引数));
function callTest(value) {
  console.log('this=' + this);
  console.log('引数=' + value);
}
var data = 'test';
callTest.call(data, 'ひきすう');

// 6.applyメソッド... 引数で指定されたオブジェクトのプロパティ
// 関数オブジェクト.apply(関数の中でthisが示すもの, 関数に渡す引数(配列));
// なお、関数オブジェクトでは既にargumentsオブジェクトを持つので仮引数を用意する必要はない
function applyTest() {
  for (var i = 0; i < arguments.length; i++) {
    arguments[i] += this;
  }
  return arguments;
}
var data = 100;
var array = [1, 2, 3, 4, 5];
var result = applyTest.apply(data, array);
for (var i = 0; i < result.length; i++) {
  console.log(result[i]);
}
