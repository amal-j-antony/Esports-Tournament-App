exports.testController = (req,res) => {
    console.log('=====Test--Route========');
    res.status(200).json({
        status: "success",
        userID: req.userID
    })
}