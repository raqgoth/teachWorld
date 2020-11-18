import React,{ useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import PostService from "../services/PostService";


const Home = () => {
    const [posts,setPosts] = useState([]);

    //life cicle
    useEffect(() => {
        PostService.get()
        .then(res=>{
            setPosts(res.data);            
        });
     }, []);

    return (
        <div className="Home">
            <NavBar title="Home" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        {posts.map(item => 
                            (<Card 
                                key={item._id}
                                id={item._id}
                                title ={item.title} 
                                date={item.updatedAt} 
                                author={item.author} 
                                content={item.content}
                                limitComments={true}
                            />) 
                        )}     
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
const deletePost = (postId)=>{
    PostService.delete(postId).then(res=>{
        console.log(res.data.message);
    });
}*/

export default Home;

