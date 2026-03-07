const loginUser = (req, res) => {
    res.status(200);
    res.send("The user is successfully loggedin");
}

module.exports = { loginUser };