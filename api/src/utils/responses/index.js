exports.successResponse = function (req, res, body, status) {
    res.status(status || 200).json({ body })
}

exports.errorResponse = function (req, res, error, status) {
    if(error.isBoom){
        console.log("THIS IS THE ERROR: ", error)
        const { output } = error;
        res.status(output.statusCode || 500).json(output.payload);
    }
    else{
        console.log("THIS IS THE ERROR2: ", error)
        res.status(status || 500).json({ error })
    }
}
