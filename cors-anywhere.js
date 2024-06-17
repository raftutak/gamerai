const corsAnywhere = require("cors-anywhere");
const https = require("https");

const host = "localhost";
const port = 3002;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Ignoruj błędy certyfikatu SSL
});

corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: ["cookie", "cookie2"],
    httpProxyOptions: {
      agent: httpsAgent,
    },
  })
  .listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
  });
