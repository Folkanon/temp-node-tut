// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directort
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

//to start with modules... './'

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);
