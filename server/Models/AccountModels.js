import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: String,
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Account = mongoose.model('Account', AccountSchema)

export default Account