 const authorsModel= require("../models/authorModel")

//////=====================AuthorCreationApi+++++++++++++++++

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorsModel.create(data)
    res.send({msg: savedData})
}


const getAuthorData= async function (req, res) {
    let allWriter= await authorsModel.find()
    res.send({msg: allWriter})
}

module.exports= {createAuthor,getAuthorData}
