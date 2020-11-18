
import React,{ useState } from "react";
import { Form } from 'react-final-form';
import { useHistory } from "react-router-dom";

import PostService from "../services/PostService";
import NavBar from "../components/NavBar";
import CustomField from "../components/CustomField";

const validators = (value)=> {
    const errors = {}

    if (!value.title) {
        errors.title = 'Title is required'
    }
    if (!value.content) {
        errors.content = 'Description is required'
    }
    if (!value.author) {
        errors.author = 'Username is required'
    }

    return errors
}


const Post = () => {
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const history = useHistory();

    const onSubmit = values=>{
        const {title,content,author} = values;
        setLoading(true);
        PostService.create({title,content,author})
        .then(res=>{
            setLoading(false);
            setMessage(res.data.message);
            setInterval(function(){ 
                history.push('/');
            },2000);
        });
    }

    return (
        <div className="Post">
            <NavBar title="Post" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        { message!==''? (<div className="alert alert-success" >{message}</div>) :''}
                        <h3>New post</h3>
                        <Form
                        validate={validators}
                        onSubmit={onSubmit}
                        render={(formProps) =>(
                            <div>
                                <CustomField name="title" inputType="text" label="Title"  placeholder="Title..." />
                                <CustomField name="content" inputType="textarea" label="Content"  placeholder="Content..." />
                                <CustomField name="author" inputType="text" label="Author"  placeholder="Author..." />
                                <button type="submit" className="btn btn-success" onClick={formProps.handleSubmit} disabled={loading}>
                                    {loading ? ('Creating post...'): ('Create')}
                                </button>
                            </div>
                            
                        )}
                        />  
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Post;