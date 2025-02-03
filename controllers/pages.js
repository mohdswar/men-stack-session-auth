const home = async (req, res) => {
    res.render("index.ejs", { title: "my app" });
}

module.exports = {
    home,


}