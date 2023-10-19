import { Schema, model, models } from 'mongoose';

const TutorialSchema = new Schema({
    title: String,
    description: String,
    duration: Number,
    url: String, // tutorial url
    thumbnail: String
})

const Tutorial = models.Tutorial || model('Tutorial', TutorialSchema)

export default Tutorial