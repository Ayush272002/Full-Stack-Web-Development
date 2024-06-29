import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<section>
      <h1> Home </h1>
      <a href='/contact'>Contact Page</a>
      <a href='/about'>about Page</a>
      </section>`);
    // res.end("<h1> Home </h1>");
    // res.end("<a href='/contact'>Contact Page</a>");
    // res.end("<a href='/about'>about Page</a>");
  } else if (req.url === "/about") {
    res.end("<h2>About section </h2>");
  } else if (req.url === "/contact") {
    res.end("<h3>Contact</h3>");
  } else {
    res.end("<h1> 404 Page not found </h1>");
  }
});

server.listen(8000, () => console.log("Server up!"));
