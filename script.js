/*

// Callback
function a() {}
function b(a) {}
b(a);

// Return functions
function a() {
  function b() {}
  return b;
}

// Function expressions
const a = function () {};

// Functions have properties and methods
function a() {}
const obj = {};
a.call(obj);

// Nested functions
function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();

*/

// Is it possible save functions in objects?
const rocket = {
  name: "Falcon 9",
  launchMessage: () => {
    console.log("🔥");
  },
};

rocket.launchMessage();
