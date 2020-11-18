import axios from 'axios';
import environment from '../environment';

const PostService = {
    get:async ()=>{
        const res = await  axios.get(environment.POSTS);
        return res;
    },
    getById:async (postId)=>{
        const res = await  axios.get(`${environment.POSTS}/${postId}`);
        return res;
    },
    delete:async (postId)=>{
        const res = await  axios.delete(`${environment.POSTS}/${postId}`);
        return res;
    },
    create: async (data)=>{
        const res = await  axios.post(environment.POSTS,data);
        return res;
    },
    update:async (postId,data)=>{
        const res = await  axios.put(`${environment.POSTS}/${postId}`,data);
        return res;
    },
};

export default PostService;