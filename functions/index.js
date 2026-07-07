
// Force source code update
const { onRequest } = require("firebase-functions/v2/https");

const logger = require("firebase-functions/logger");

exports.helloWorld = onRequest((request, response) => {
  response.send("hellooo");
});

