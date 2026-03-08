const protect = (req, res, next) => {
    // In future, check JWT here
    console.log("Auth middleware hit");
    next();
};

module.exports = { protect };
