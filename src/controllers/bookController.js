const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")

//++++++++++++++++++++++++ create book++++++++++++++++++++

const createBooks= async function (req, res) {
    let data= req.body
    let bookCreation= await bookModel.create(data)
    res.send({msg: bookCreation})
}
//================get author Book==================

const getAuthorBook= async function (req, res) {
    let authBooks= await bookModel.find()
    res.send({msg: authBooks})
}

//============GetAuthor BooknameList===============

const getAuthorBookList= async function (req, res) {
    let arrObj= await authorModel.find({author_name :"Chetan Bhagat"})
    const[obj]=arrObj
    let id =obj.author_id
    let allbooks= await bookModel.find({author_id:id})
    res.send({msg: allbooks})
}
//===================== Update book Price by using Name++++++++++++++++
const updateBookPrice = async function (req, res) {

    let book = await bookModel.findOneAndUpdate({name:"Two States"},{$set:{price:100}},{$new:true})
  
    res.send({data:book})
}

//==============BookbyPrice btwn 50 - 100========================

const bookByPrice = async function (req, res) {
   let allbooks= await bookModel.find({ price : { $gte: 50, $lte: 100} })
   let saveData =[]

   for(index of allbooks){
       let data=await authorModel.findOne({author_id:(index.author_id)}).select({author_name:1,_id:0})
       
        saveData.push(index)
        saveData.push(data)
   }
   
   
   res.send({msg:saveData})
};

module.exports= {createBooks,getAuthorBook,getAuthorBookList,updateBookPrice,bookByPrice}
