const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/test',
        createProxyMiddleware({
            target: 'http://ec2-50-18-22-205.us-west-1.compute.amazonaws.com:8080',
            changeOrigin: true,
        })
    );
};