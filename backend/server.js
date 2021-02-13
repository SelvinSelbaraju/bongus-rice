import express from 'express';
import mongoose from 'mongoose';
import Review from './models/review.js';

const app = express();
app.use(express.json());

const dbURI = 'mongodb+srv://selvin:test1234@nodetutorial.40qua.mongodb.net/bongus?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(app.listen(8000, () => {
        console.log('Listening!');
    }))
    .catch((err) => {
        console.log(err);
    });

app.get('/reviews', (req, res) => {
    Review.find({}, (err, data) => {
        res.send(data)
    });
});

app.post('/reviews', (req, res) => {
    const review = new Review (req.body)
    
    review.save()
        .then((result) => {
            console.log('Review Saved!');
            res.send('Done!')
        })
        .catch((err) => {
            console.log(err);
        });
});

app.delete('/reviews', (req, res) => {
    Review.deleteMany({})
        .then((result) => {
            console.log("Deleted!");
        })
        .catch((err) => {
            console.log(err);
        });
});

