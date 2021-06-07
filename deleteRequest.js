const https = require("https");

const options = {
  host: "jsonplaceholder.typicode.com",
  path: "/users/1",
  method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
};

let request = https.request(options, (res) => {
  if (res.statusCode !== 200) {
    console.error(
      `Did not get an Created from the server. Code: ${res.statusCode}`
    );
    res.resume();
    return;
  }
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("close", () => {
    console.log("Deleted date all data");
    console.log(JSON.parse(data));
  });
});

request.end();

request.on("error", (err) => {
  console.error(
    `Encountered an error trying to make a request: ${err.message}`
  );
});
