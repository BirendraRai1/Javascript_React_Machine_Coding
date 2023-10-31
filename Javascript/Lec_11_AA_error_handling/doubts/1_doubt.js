const a = (async function () {
  return await Promise.resolve("ankit");
})();
console.log(a);
a.then(function (data) {
  console.log(data);
});
