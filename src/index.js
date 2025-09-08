const express = require('express');
const rateLimit = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');
const app = express();

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 30,
});

app.use(express.json());   
app.use(express.urlencoded({extended: true}));

app.use(limiter);

app.use('/flightService', createProxyMiddleware({
    target: ServerConfig.FLIGHT_SERVICE,
    changeOrigin: true,
    pathRewrite: {'^/flightService':'/'}
}))

app.use('/bookingService', createProxyMiddleware({
    target: ServerConfig.BOOKING_SERVICE,
    changeOrigin: true,
    pathRewrite: {'^/bookingService':'/'}
}))
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`sucessfully started the server on PORT: ${ServerConfig.PORT}`);
    Logger.info("Sucessfully started the server");
});