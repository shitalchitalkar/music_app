function generateResponse(res, apiCode, json){
    return res.status(apiCode).send(json)
}

module.exports = generateResponse