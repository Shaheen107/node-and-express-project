const mongoose= require("mongoose")

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
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

const Contact = mongoose.model("Contact", contactSchema)


module.exports = Contact;