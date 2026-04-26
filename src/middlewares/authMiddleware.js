const protect = (req, res, next) => {
    // In future, I will check JWT here
    console.log("Auth middleware hit");
    next();
};

module.exports = { protect };
