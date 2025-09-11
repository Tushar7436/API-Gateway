const express = require('express');
const rateLimit = require('express-rate-limit');
const proxy = require('express-http-proxy');
const cors  = require('cors');
const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');
const app = express();

// const {user, Role} = require('./models');

app.use(cors());

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 30000,
});

app.use(express.json());   
app.use(express.urlencoded({extended: true}));

app.use(limiter);
app.use('/api', apiRoutes);


app.use('/bookingService', proxy(ServerConfig.BOOKING_SERVICE, {
    proxyReqPathResolver: req => req.originalUrl.replace(/^\/bookingService/, '')
}));


app.use('/flightService', proxy(ServerConfig.FLIGHT_SERVICE, {
    proxyReqPathResolver: req => req.originalUrl.replace(/^\/flightService/, '')
}));


app.listen(ServerConfig.PORT, async () => {
    console.log(`successfully started the server on PORT: ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server");
    // user = await user.findByPk(6);
    // role = await Role.findByPk();
    // console.log(role, user);
    // user.addRole(role);
});