const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google'],
    createProxyMiddleware({
      target: 'https://emaily-server-production.up.railway.app',
      headers: {
        host: 'emaily-server-production.up.railway.app'
      }
    })
  );
};
