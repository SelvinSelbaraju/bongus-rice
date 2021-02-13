import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

export default Review