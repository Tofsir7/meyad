const loginUser = (req, res) => {
    res.status(200).send("The user is successfully loggedin");
}

module.exports = { loginUser };
