let mongoose = require('mongoose');
let User = mongoose.model('User');
let Question = mongoose.model('Question');

class QuestionsController {
  index(req, res){
      Question.find({}).populate('user').exec(function(err, questions){
          if(err){
              return res.json(err);
          }
          return res.json(questions);
      })
  }
  create(req, res){
      Question.create(req.body, (err, question) => {
          if(err){ return res.json(err) }
          User.findByIdAndUpdate(req.body.user, { $push: { questions: question._id } }, { new: true }, (err, user) => {
              if(err){ return res.json(err) }
              return res.json(question);
          })
      })
  }

  show(req, res){
          Question.findById(req.params.id)
  }

  increaseVotes(req,res){
    Question.findByIdAndUpdate(
      req.params.id,
      {$inc:{votes:1}},
      {new:true},
      (err,answer)=>{
        if(err){return res.json(err)}
        return res.json(question);
      }
    )
  }
}
module.exports = new QuestionsController();
