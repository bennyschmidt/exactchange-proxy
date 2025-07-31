const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 8000;

const TARGET_DOMAIN = 'https://www.exactchange.network';

app.use('/', createProxyMiddleware({
  target: TARGET_DOMAIN,
  changeOrigin: true
}));

app.listen(PORT, () => {
  console.log(`Proxying requests to and from ${TARGET_DOMAIN}...`);
});
