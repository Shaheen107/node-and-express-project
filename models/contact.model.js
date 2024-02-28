const mongoose= require("mongoose")

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "please add the contact email address"],
    },
    phone: {
        type: String,
        required: [true, "please add the contact Phone number"],
    }

}, {
    timestamps: true,
})

const Contact = mongoose.module("Contact", contactSchema)


module.exports = Contact;