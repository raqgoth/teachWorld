const Comment = require('../models/Comment');
const commentCtrl = {};


commentCtrl.getCommentByPostId = async (req,res)=>{
    const comment = await Comment.find({"postId":req.params.id});
    res.json(comment);
};

commentCtrl.createComment = async (req,res)=>{
    const {author,comment,postId} = req.body;
    const newComment = new Comment({author,comment,postId});
    await newComment.save();
    res.json({message:'Comment successfully created!'});
};

commentCtrl.deleteComment = async (req,res)=>{
    await  Comment.findByIdAndDelete(req.params.id);
      res.json({message:'Comment successfully deleted!'});
};

module.exports = commentCtrl;
