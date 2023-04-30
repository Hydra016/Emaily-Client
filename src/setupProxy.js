const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google'],
    createProxyMiddleware({
      target: 'https://emaily-server-production.up.railway.app',
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Content-Encoding'] = 'gzip';
        proxyRes.headers['Transfer-Encoding'] = 'chunked';
        proxyRes.pipe(zlib.createGzip()).pipe(res);
      }
    })
  );
};
