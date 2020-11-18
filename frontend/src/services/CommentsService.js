import axios from 'axios';
import environment from '../environment';

const CommentService = {
    getByPostId:async (postId)=>{
        const res = await  axios.get(`${environment.COMMENTS}/${postId}`);
        return res;
    },
    delete:async (commentId)=>{
        const res = await  axios.delete(`${environment.COMMENTS}/${commentId}`);
        return res;
    },
    create: async (data)=>{
        const res = await  axios.post(environment.COMMENTS,data);
        return res;
    },
};
export default CommentService;