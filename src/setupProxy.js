const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/test',
        createProxyMiddleware({
            target: 'http://ec2-54-176-96-77.us-west-1.compute.amazonaws.com:8080',
            changeOrigin: true,
        })
    );
};