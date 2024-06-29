import path from "path";

console.log(path.basename("C:\\abc\\xyz")); //return the last portion of path
console.log(path.basename("C:\\abc\\xyz.js", ".js")); //removes .js
console.log(path.dirname("C:\\abc\\xyz.js", ".js"));
console.log(path.extname("C:\\abc\\xyz.js", ".js")); //gives the extension name
console.log(path.join("c:", "abc", "xyz", "pqr"));
