import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true,
    },
});

todoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

todoSchema.set('toJSON', {
    virtuals: true
});

export default mongoose.model("todo", todoSchema);