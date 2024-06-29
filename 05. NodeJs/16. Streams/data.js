import fs from "fs";

for (let i = 0; i <= 10000; i++) {
  fs.writeFileSync("16. Streams/data.txt", `${i}\n`, { flag: "a" });
}
