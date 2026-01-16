function add(a, b) {
  console.log("Running in", process.env.NODE_ENV);
  return a + b;
}


module.exports = add;
