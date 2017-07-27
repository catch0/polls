let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required.'],
        minlength: [8, 'question must be at least 8 characters']

    },
    option1: {
                type: String,
                required: [true, 'Option1 is required.'],
                minlength: [3, 'options must be at least 3 characters.'],
                vote: {type: Number, default:0}

              },
    option2: {
                type: String,
                required: [true, 'Option2 is required.'],
                minlength: [3, 'options must be at least 3 characters.'],
                vote: {type: Number, default:0}
              },
    option3: {
                type: String,
                required: [true, 'Option3 is required.'],
                minlength: [3, 'options must be at least 3 characters.'],
                vote: {type: Number,default:0}
            },
    option4: {
              type: String,
              required: [true, 'Option4 is required.'],
              minlength: [3, 'options must be at least 3 characters'],
              vote: {type: Number,default:0}
            },
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, { timestamps: true });

mongoose.model('Question', QuestionSchema);
