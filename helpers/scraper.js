
// var db = require("../models/dbConnect");
// exports.getArticles = function(req, res){
//    db.Schema.find()
//    .then(function(scrapData){
//        res.json(scrapData);
//    })
//    .catch(function(err){
//        res.send(err);
//    })
// }

// exports.saveArticle = function(req, res){
//     db.Schema.save(req.body)
//     .then(function(newTodo){
//         res.status(201).json(newTodo);
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// }

// exports.getNewArticle = function(req, res){
//    db.Schema.findById(req.params.todoId)
//    .then(function(foundTodo){
//        res.json(foundTodo)
//    })
//    .catch(function(err){
//        res.send(err)
//    })
// }


// exports.deleteArticle = function(req, res){
//     db.Schema.remove({_id: req.params.todoId})
//     .then(function(){
//         res.json({message:'we deleted it'});
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// }

// module.exports = exports;