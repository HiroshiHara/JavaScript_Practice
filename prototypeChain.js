'use strict';
var printBorderLog = function() {
  console.log('-----------------');
}

// JavaScriptにおける継承... プロトタイプチェーン
// 親クラスの定義
var Employee = function(empId, name, department, salary) {
  this.empId = empId;
  this.name = name;
  this.department = department;
  this.salary = salary;
  // Object.seal(this); 親クラスを凍結してしまうと、子クラスでプロパティを追加できない
}
Employee.prototype.setSalary = function(salary) {
  this.salary = salary;
}
Employee.prototype.payRise = function() {
  this.salary += 10;
}

// 子クラスの定義
var Engineer = function(empId, name, department, salary, ...skill) {
  // 2.親クラスのコンストラクタを呼び出す
  // 第一引数はthis固定、第二引数以降は親クラスのコンストラクタの引数
  Employee.call(this, empId, name, department, salary);
  this.skill = [];
  for (var i = 4; i < arguments.length; i++) {
    this.skill[i - 4] = arguments[i];
  }
}
// 1.子クラスのプロパティに親クラスのインスタンスをセットする(コンストラクタの引数は無視する)
// これで親クラスのプロパティを使用できるようになる
Engineer.prototype = new Employee();
Engineer.prototype.showAllSkill = function() {
  for (var i = 0; i < this.skill.length; i++) {
    console.log(this.skill[i]);
  }
}

// 親クラスのインスタンス生成
var emp1 = new Employee('E0001', 'Hiroshi Hara', 'Human_Resources_dept', 500);
emp1.setSalary(400);
console.log(emp1);
// console.log(emp1.showAllSkill()); error
printBorderLog();

// 子クラスのインスタンス生成
var emp2 = new Engineer('E0002', 'Chris Coleman', 'System_dev', 600, 'Java', 'Python', 'JavaScript');
emp2.setSalary(700);
console.log(emp2);
emp2.showAllSkill();
emp2.payRise();
console.log(emp2); // EmployeeクラスのpayRise()が適用される
printBorderLog();

// JavaScriptにおける継承関係は動的に変更可能である
// Engineerクラスの別の親クラスを定義
var Worker = function(empId, name, department, salary) {
  this.empId = empId;
  this.name = name;
  this.department = department;
  this.salary = salary;
}
Worker.prototype.payRise = function() {
  this.salary += 30;
}

// // Engineerクラスの親クラスをWorkerクラスに変更
// Engineer.prototype = new Worker();
// var emp3 = new Engineer('E0003', 'Dave Weckle', 'System_mainte', 700, 'RedHat', 'Oracle Server', 'AWS');
// emp3.payRise();
// console.log(emp3); // WorkerクラスのpayRise()が適用される
// // emp3.showAllSkill(); error
// printBorderLog();

// プロパティチェーンはインスタンス生成の時点で固定されるので、
// 親クラスを変更しても既に生成したインスタンスについては影響を及ぼさない
emp2.payRise();
console.log(emp2); // EmployeeクラスのpayRise()が適用される
emp2.showAllSkill();
printBorderLog();

// オブジェクトの型を判定する... constructorプロパティ
// プロトタイプチェーンを使用している場合、constructorプロパティは継承元を示す
console.log(emp1.constructor === Employee); // true
console.log(emp2.constructor === Employee); // true
console.log(emp2.constructor === Engineer); // false
printBorderLog();

// 元となるコンストラクターを判定する... instanceof演算子
// 継承元のクラスもしくは子クラス自身のコンストラクターで生成されたものであるならture
console.log(emp2 instanceof Employee); // true
console.log(emp2 instanceof Engineer); // true
printBorderLog();

// 参照しているプロトタイプを確認する... isPrototypeOf()
console.log(Employee.prototype.isPrototypeOf(emp2)); // true
console.log(Engineer.prototype.isPrototypeOf(emp2)); // true
