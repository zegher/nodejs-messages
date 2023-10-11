const log = (req, res, next) => {
    console.log("Request received");
    next(); //als je geen next neemt, wordt uw request gestopt.
};

module.exports = log;