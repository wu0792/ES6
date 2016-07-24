'use strict';

var promise = new Promise(function (resolve, reject) {
    //always resolve
    if (true) {
        resolve('yes, resolved');
    } else {
        reject('oops');
    }
});

promise.then(function (value) {
    //here invoked if resolve excuted
}, function (value) {
    //here invoked if reject excuted
});

var promise1 = new Promise();
var promise2 = new Promise();

Promise.all([promise1, promise2]).then(function (value) {
    console.log('onfullfied, invoked when all promise resolved');
}, function (value) {
    console.log('onrejected, invoked when any promise rejected');
});

Promise.race(fetch('/get-resource-from-ajax'), new Promise(function (resolve, reject) {
    setTimeout(function () {
        return reject(new Error('request timeout'));
    }, 5000);
}));

//define 2 util functions
Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected).catch(function (reason) {
        // 抛出一个全局错误
        setTimeout(function () {
            throw reason;
        }, 0);
    });
};

Promise.prototype.finally = function (callback) {
    var P = this.constructor;
    return this.then(function (value) {
        return P.resolve(callback()).then(function () {
            return value;
        });
    }, function (reason) {
        return P.resolve(callback()).then(function () {
            throw reason;
        });
    });
};

server.listen(0).then(function () {
    // run test
}).finally(server.stop);