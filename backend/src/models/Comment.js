const  {Schema, model} = require('mongoose');


const commentSchema = new Schema({
    
    author: { type: String, required: true},
    comment: { type: String, required: true},
    postId:{type: String, required: true},
    date: {type : Date, default: Date.now}
}
,
{ timestamps: true}
);

module.exports = model('comments',commentSchema);