'use strict';

// パッケージ宣言
// ショートサーキット演算子を利用して、変数UtilLogicsがundefinedの時だけ空のオブジェクトを生成する
// ここで作成した空のオブジェクトに対して、パッケージ名.クラス名の要領でパッケージ配下のクラスを宣言する
var UtilLogics = UtilLogics || {};

UtilLogics.LoginLogics = function() {}
UtilLogics.LoginLogics.checkRegExp = function(regExp, pattern, option = 'g') {
  var reg = new RegExp(regExp, option);
  if (reg.test(pattern)) {
    return true;
  }
  return false;
}

UtilLogics.efficiencyLogics = function() {};
UtilLogics.efficiencyLogics.createNamespaces = function(namespaces) {
  // 引数の名前空間を「.」区切りで分割
  var names = namespaces.split('.');
  // 最上位の名前空間(= グローバルオブジェクト)を記述(ブラウザ環境ではwindow)
  var parent = window;
  // 名前空間を上から順に取得
  for (var i = 0; i < names.length; i++) {
    parent[names[i]] = parent[names[i]] || {};
    parent = parent[names[i]];
  }
  return parent;
}
UtilLogics.efficiencyLogics.displayBorderLog = function() {
  console.log('--------------------------');
}


// パッケージ配下のクラスを利用する際は、パッケージ名から宣言する。めんどくさ
var regExp1 = '[a-zA-Z\\d]';
var pattern1 = 'mrbob403';
console.log(UtilLogics.LoginLogics.checkRegExp(regExp1, pattern1, 'gi')); // true

var regExp2 = '^[\\d]{3,5}[a-zA-Z._-]{4,10}$';
var pattern2 = '23421dmemdjh2';
console.log(UtilLogics.LoginLogics.checkRegExp(regExp2, pattern2, 'gi')); // false

// 名前空間取得のベストプラクティス
var namespace = UtilLogics.efficiencyLogics.createNamespaces('UtilLogics.efficiencyLogics');
namespace.displayBorderLog();
