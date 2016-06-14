var Sample = function(name){
  this.name = name;
};

Sample.prototype.write = function() {
  console.log(this.name + 'さん Hello World!!');
}

Sample.prototype.fizzBuzz = function(count) {
  for (var i = 0; i < count; i++) {
    if (i % 15 == 0) {
      console.log('フィズバズー');
    } else if (i % 3 == 0) {
      console.log('fiz!');
    } else if (i % 5 == 0) {
      console.log('buz!');
    } else {
      console.log(i);
    }
  }
}
// こわい
Sample.prototype.prime = function(count) {
  
  for (var i = 0; i < count; i++) {
    if (this.IsPrime(i)) {
      console.log(i);
    }
  }
}

Sample.prototype.IsPrime = function(num) {
  // todo : あとでやる
  // こんな感じだっけ？あ、さーせんｗｗｗ
  // たまーに巻き戻るね
  if (num === 2) return true;
  if (num % 2 == 0) return false;
  for(var i=3; i<=Math.sqrt(num); i+=2) {
    if(num % i == 0) {
      return false;
    }
  }
  return true;
}

Sample.prototype.zundoko = function(count) {
  var zundoko = ['ズン', 'ドコ'];
  var res = '';
  while (true) {
    var random = Math.round(Math.random());
    res += zundoko[random];
    if (this.checkZundoko(res)){
      console.log(res + ' キ・ヨ・シ！');
    }
  }
}
Sample.prototype.checkZundoko(str) {
  return true;
}
Sample.prototype.three = function (count) {
  for (var i = 0; i < count; i++) {
    console.log(i + ((i + '').indexOf('3') != -1 ? '!' : ''));
  }
}

// お、一人ふえてる
var s = new Sample('シュール');
s.write();
s.fizzBuzz(20);
// s.three(13);
s.prime(20);

// さすがに bash は個別で動かせるんだね
// bash やべーことやってるｗｗｗｗｗｗｗ
// 全員アプリ停止できるのもやヴぁい
// あ、ブラウザのサイズ違うからそらずれるか
// sshule
// //
// // # SimpleServer
// //
// // A simple chat server using Socket.IO, Express, and Async.
// //
// var http = require('http');
// var path = require('path');

// var async = require('async');
// var socketio = require('socket.io');
// var express = require('express');

// //                                                                      ↓ここでbash追加できる
// // ## SimpleServer `SimpleServer(obj)`
// //
// // Creates a new instance of SimpleServer with the following options:
// //  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
// //
// var router = express();
// var server = http.createServer(router);
// var io = socketio.listen(server);

// router.use(express.static(path.resolve(__dirname, 'client')));
// var messages = [];
// var sockets = [];

// io.on('connection', function (socket) {
//     messages.forEach(function (data) {
//       socket.emit('message', data);
//     });

//     sockets.push(socket);

//     socket.on('disconnect', function () {
//       sockets.splice(sockets.indexOf(socket), 1);
//       updateRoster();
//     });

//     socket.on('message', function (msg) {
//       var text = String(msg || '');

//       if (!text)
//         return;

//       socket.get('name', function (err, name) {
//         var data = {
//           name: name,
//           text: text
//         };

//         broadcast('message', data);
//         messages.push(data);
//       });
//     });

//     socket.on('identify', function (name) {
//       socket.set('name', String(name || 'Anonymous'), function (err) {
//         updateRoster();
//       });
//     });
//   });

// // てすてす
// //  へー　すげーじゃん
// // プログラム配信しながら、ここでコードをさらしておけば
// // リスナーさんもみたいところのコードが見れると
// // だいたい画面のコードだけだと流れおえないもんね　リスナーさん

// function updateRoster() {
//   async.map(
//     sockets,
//     function (socket, callback) {
//       socket.get('name', callback);
//     },
//     function (err, names) {
//       broadcast('roster', names);
//     }
//   );
// }

// function broadcast(event, data){ 
//   sockets.forEach(function (socket) {
//     socket.emit(event, data);
//   });
// }

// server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//   var addr = server.address();
//   console.log("Chat server listening at", addr.address + ":" + addr.port);
// });
