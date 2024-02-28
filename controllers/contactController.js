const getContacts = (req, res)=>{
    res.status(200).json({message: "Get all content"})
}

const createContact = (req, res)=>{
    res.status(200).json({message: "create content"})
}

const getContact = (req, res)=>{
    res.status(200).json({message: `get content for ${req.params.id}`})
}

const updateContact = (req, res)=>{
    res.status(200).json({message: `update content for ${req.params.id}`})
}

const deleteContact = (req, res)=>{
    res.status(200).json({message: `delete content for ${req.params.id}`})
}
module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}