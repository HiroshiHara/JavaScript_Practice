'use strict';
// JavaScriptでは関数(Functionオブジェクト)にクラスとしての役割を与えている
var Person = function(firstName, lastName, age, height, weight) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.height = height;
  this.weight = weight;

  this.getName = function() {
    return this.firstName + ' ' + this.lastName;
  }
  this.getAge = function() {
    return this.age;
  }
  this.getHeight = function() {
    return this.height;
  }
  this.getWeight = function() {
    return this.weight;
  }
  // オブジェクトを凍結することでメンバの追加/削除を防止できる
  // Object.seal(this);
};

// JavaScriptでは同一のクラスから生成されたインスタンスであっても、
// それぞれが持つメンバは同一であるとは限らない
var p1 = new Person('Chris', 'Coleman', 40, 180, 90);
var p2 = new Person('Dave', 'Weckle', 50, 170, 70);
console.log(p1.getName());
console.log(p2.getName());
// p1のメンバにdisplay()を追加
p1.display = function() {
  console.log('---------------');
  console.log('NAME:' + this.getName());
  console.log('AGE:' + this.getAge());
  console.log('HEIGHT:' + this.getHeight());
  console.log('WEIGHT:' + this.getWeight());
  console.log('---------------');
}
p1.display();
// p2.display(); p2のメンバにはdisplay()が定義されていない

delete p1.getName;
console.log(p2.getName()); // p1からメンバを削除してもp2に影響はない
// console.log(p1.getName());　error
