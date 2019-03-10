'use strict';
let displayBorderLog = function() {
  console.log('------------------------');
}

let User = function() {
  // プライベート変数
  var _userName;
  var _userId;
  var _password;

  // Object.definePropertyメソッドでアクセサメソッドを定義する
  // Object.defineProperty(obj:プロパティを定義するオブジェクト, prop:プロパティ名, desc:プロパティの構成情報)
  Object.defineProperty(
    this,
    'userName', {
      get: function() {
        return _userName;
      },
      set: function(userName) {
        if (typeof userName === 'string' && userName) {
          _userName = userName;
        }
      }
    }
  );

  Object.defineProperty(
    this,
    'userId', {
      get: function() {
        return _userId;
      },
      set: function(userId) {
        if (typeof userId === 'string' && userId) {
          _userId = userId;
        }
      }
    }
  );

  Object.defineProperty(
    this,
    'password', {
      get: function() {
        return _password;
      },
      set: function(password) {
        var reg = new RegExp('^[a-z\\d]{8,100}$', 'i');
        if (reg.test(password)) {
          _password = password;
        }
      }
    }
  );
}

var displayUserData = function(user) {
  console.log(user.userName);
  console.log(user.userId);
  console.log(user.password);
}

var user1 = new User();
user1.userName = 'Chris Coleman';
user1.userId = '0001';
user1.password = 'efdas234';
displayUserData(user1);
displayBorderLog();

let Supplyer = function() {
  // プライベート変数
  var _supplyerName;
  var _tel;
  var _mailAddress;

  // Object.definePropertysでまとめて定義する
  // Object.definePropertys(obj:プロパティを定義するオブジェクト, props:プロパティの構成情報)
  Object.defineProperties(this, {
    supplyerName: {
      get: function() {
        return _supplyerName;
      },
      set: function(supplyerName) {
        if (typeof supplyerName === 'string' && supplyerName) {
          _supplyerName = supplyerName;
        }
      }
    },

    tel: {
      get: function() {
        return _tel;
      },
      set: function(tel) {
        var reg = new RegExp('^[\\d]{7,12}$');
        if (reg.test(tel)) {
          _tel = tel;
        }
      }
    },

    mailAddress: {
      get: function() {
        return _mailAddress;
      },
      set: function(mailAddress) {
        var reg = new RegExp('^[a-zA-Z\\d]{1}[a-zA-Z\\d_.-]*@{1}[a-zA-Z\\d_.-]{1,}\.[a-zA-Z\\d]{1,}$');
        if (reg.test(mailAddress)) {
          _mailAddress = mailAddress;
        }
      }
    }

  });
}

var displaySupplyerData = function(supplyer) {
  console.log(supplyer.supplyerName);
  console.log(supplyer.tel);
  console.log(supplyer.mailAddress);
}

var supplyer1 = new Supplyer();
supplyer1.supplyerName = 'A001商事';
supplyer1.tel = '032536342';
supplyer1.mailAddress = 'test@mail.jp';
displaySupplyerData(supplyer1);
displayBorderLog();
