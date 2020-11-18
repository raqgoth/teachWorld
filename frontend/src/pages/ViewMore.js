import React,{ useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import PostService from "../services/PostService";

const ViewMore = (props) => {
    const {match:{params}} = props;
    const [post,setPost] = useState([]);
    useEffect(() => {
        PostService.getById(params.postId)
        .then(res=>{
            setPost(res.data);            
        });
     }, []);

    return (
        <div className="ViewMore">
             <NavBar title="View more" />
             <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">                       
                        <Card
                            key={post._id}
                            id={post._id}
                            title ={post.title} 
                            date={post.updatedAt} 
                            author={post.author} 
                            content={post.content}
                            limitComments={false}
                        />
                    </div>
                </div>
             </div>
        </div>
    );
}
  
export default ViewMore;