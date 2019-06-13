"use strict";

console.log("Promise");

new Promise(function (resolve, reject) {
    throw new Error('test');
    // reject();
}).then(function () {
    console.log("resolve");
}, function () {
    console.log("reject");
}).catch(function () {
    console.log(" catch reject");
});