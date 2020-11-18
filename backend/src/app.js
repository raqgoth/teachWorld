const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connecting to db
const conn = mongoose.connect(
    'mongodb://localhost/teachWorld', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

conn.then(db =>console.log('Db connected!'))
.catch(err =>console.log(err));


//importing routes
const postRouter    = require('./routes/PostRouter');
const CommentRouter = require('./routes/CommentRouter');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//routes use
app.use('/api/posts',postRouter);
app.use('/api/comments',CommentRouter);

//starting server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${ app.get('port') }`);
});