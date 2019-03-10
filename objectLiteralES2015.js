'use strict';

// オブジェクトリテラルに関数を入れる際、
// 名前:function()~ではなく関数名()~だけで良くなった
const TAX = 1.08;
let item = {
  name: '鉛筆',
  price: 50,
  getTaxIncluded() {
    return this.price * TAX;
  }
}
console.log(item);
console.log(item.getTaxIncluded());

// 変数を同名のプロパティに割り当てる
var color = 'red';
var width = 5;
var height = 5;
let block = {color, width, height};
console.log(block);

// プロパティ名を式で書き、ブラケットでくくることで、動的にプロパティ名を生成できる(Computed property names)
let i = 0;
let person = {
  name: 'someone',
  birth: new Date(1970, 5, 23),
  ['memo' + ++i]: '大阪支社',
  ['memo' + ++i]: 'システム開発部',
  ['memo' + ++i]: 'カスタマイズチーム'
}
console.log(person);
