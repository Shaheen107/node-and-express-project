const asyncHandler = require("express-async-handler")

const getContacts = asyncHandler(async (req, res)=>{
    res.status(200).json({message: "Get all content"})
})


const createContact = asyncHandler(async (req, res)=>{
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All field are mandatory")
    }
    res.status(200).json({message: "create content"})
})


const getContact = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `get content for ${req.params.id}`})
})


const updateContact = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `update content for ${req.params.id}`})
})


const deleteContact = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `delete content for ${req.params.id}`})
})
module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}