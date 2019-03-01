'use strict';
// JavaScriptでは関数(Functionオブジェクト)にクラスとしての役割を与えている
let firstName;
let lastName;
let age;
let height;
let weight;

var Person = function(firstName, lastName, age, height, weight) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.height = height;
  this.weight = weight;
}

function getFirstName() {
  return this.firstName;
}

function getLastName() {
  return this.lastName;
}

var p = new Person('Hiroshi', 'Hara', 27, 168.7, 56.2);
console.log(p.firstName);
