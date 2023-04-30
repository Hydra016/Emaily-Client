const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'https://emaily-server-production.up.railway.app',
      changeOrigin: true
    })
  );

  app.use(
    '/auth/facebook',
    createProxyMiddleware({
      target: 'https://emaily-server-production.up.railway.app',
      changeOrigin: true
    })
  );

  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'https://emaily-server-production.up.railway.app',
      changeOrigin: true
    })
  );
};